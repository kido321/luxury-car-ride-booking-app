import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const sig = request.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err instanceof Error ? err.message : 'Unknown error');
    return NextResponse.json({ message: 'Webhook signature verification failed' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      // Check if a booking already exists for this session
      const { data: existingBooking } = await supabase
        .from('bookings')
        .select('id')
        .eq('stripe_session_id', session.id)
        .single();

      if (existingBooking) {
        console.log('Booking already exists for session:', session.id);
        return NextResponse.json({ message: 'Booking already processed' });
      }

      // Create the booking in Supabase
      const { error } = await supabase
        .from('bookings')
        .insert({
          full_name: session.metadata?.full_name,
          phone_number: session.metadata?.phone_number,
          date: session.metadata?.date,
          time: session.metadata?.time,
          pickup_address: session.metadata?.pickup_address,
          dropoff_address: session.metadata?.dropoff_address,
          car_type: session.metadata?.car_type,
          amount: parseFloat(session.metadata?.amount || '0'),
          stripe_session_id: session.id,
          payment_status: 'paid'
        });

      if (error) {
        console.error('Error creating booking:', error);
        return NextResponse.json({ message: 'Error creating booking' }, { status: 500 });
      }

      console.log('Booking created successfully for session:', session.id);
    } catch (error) {
      console.error('Error processing webhook:', error);
      return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}