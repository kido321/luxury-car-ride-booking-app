// import { NextRequest, NextResponse } from "next/server";
// import Stripe from 'stripe';
// import { createClient } from '@supabase/supabase-js';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL as string,
//   process.env.SUPABASE_SERVICE_ROLE_KEY as string
// );

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

// export async function POST(request: NextRequest) {
//   const payload = await request.text();
//   const sig = request.headers.get('stripe-signature') as string;

//   let event: Stripe.Event;

//   try {
//     event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
//   } catch (err) {
//     console.error('Webhook signature verification failed:', err instanceof Error ? err.message : 'Unknown error');
//     return NextResponse.json({ message: 'Webhook signature verification failed' }, { status: 400 });
//   }

//   if (event.type === 'checkout.session.completed') {
//     const session = event.data.object as Stripe.Checkout.Session;

//     try {
//       // Check if a booking already exists for this session
//       const { data: existingBooking } = await supabase
//         .from('bookings')
//         .select('id')
//         .eq('stripe_session_id', session.id)
//         .single();

//       if (existingBooking) {
//         console.log('Booking already exists for session:', session.id);
//         return NextResponse.json({ message: 'Booking already processed' });
//       }

//       // Create the booking in Supabase
//       const { error } = await supabase
//         .from('bookings')
//         .insert({
//           full_name: session.metadata?.full_name,
//           phone_number: session.metadata?.phone_number,
//           date: session.metadata?.date,
//           time: session.metadata?.time,
//           pickup_address: session.metadata?.pickup_address,
//           dropoff_address: session.metadata?.dropoff_address,
//           car_type: session.metadata?.car_type,
//           amount: parseFloat(session.metadata?.amount || '0'),
//           stripe_session_id: session.id,
//           payment_status: 'paid'
//         });

//       if (error) {
//         console.error('Error creating booking:', error);
//         return NextResponse.json({ message: 'Error creating booking' }, { status: 500 });
//       }

//       console.log('Booking created successfully for session:', session.id);
//     } catch (error) {
//       console.error('Error processing webhook:', error);
//       return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 });
//     }
//   }

//   return NextResponse.json({ received: true });
// }







// import { NextRequest, NextResponse } from "next/server";
// // import Stripe from 'stripe';
// import { createClient } from '@supabase/supabase-js';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL as string,
//   process.env.SUPABASE_SERVICE_ROLE_KEY as string
// );

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// export async function POST(request: NextRequest) {
//   const payload = await request.text();
//   const sig = request.headers.get('stripe-signature');

//   let event: Stripe.Event;

//   try {
//     if (!endpointSecret) {
//       throw new Error('STRIPE_WEBHOOK_SECRET is not set in the environment');
//     }
//     if (!sig) {
//       throw new Error('No Stripe signature found in the request headers');
//     }
//     event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
//   } catch (err) {
//     console.error('Webhook signature verification failed:', err instanceof Error ? err.message : 'Unknown error');
//     return NextResponse.json({ message: 'Webhook signature verification failed' }, { status: 400 });
//   }

//   // ... rest of your code remains the same

//   if (event.type === 'checkout.session.completed') {
//     const session = event.data.object as Stripe.Checkout.Session;

//     try {
//       // Check if a booking already exists for this session
//       const { data: existingBooking } = await supabase
//         .from('bookings')
//         .select('id')
//         .eq('stripe_session_id', session.id)
//         .single();

//       if (existingBooking) {
//         console.log('Booking already exists for session:', session.id);
//         return NextResponse.json({ message: 'Booking already processed' });
//       }

//       // Create the booking in Supabase
//       const { error } = await supabase
//         .from('bookings')
//         .insert({
//           full_name: session.metadata?.full_name,
//           phone_number: session.metadata?.phone_number,
//           date: session.metadata?.date,
//           time: session.metadata?.time,
//           pickup_address: session.metadata?.pickup_address,
//           dropoff_address: session.metadata?.dropoff_address,
//           car_type: session.metadata?.car_type,
//           amount: parseFloat(session.metadata?.amount || '0'),
//           stripe_session_id: session.id,
//           payment_status: 'paid'
//         });

//       if (error) {
//         console.error('Error creating booking:', error);
//         return NextResponse.json({ message: 'Error creating booking' }, { status: 500 });
//       }

//       console.log('Booking created successfully for session:', session.id);
//     } catch (error) {
//       console.error('Error processing webhook:', error);
//       return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 });
//     }
//   }

//   return NextResponse.json({ received: true });
// }


// pages/api/webhook/stripe.ts
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;


// export default async function handler(req:any, res:any) {
//   if (req.method === 'POST') {
//     const sig = req.headers['stripe-signature'];
//     let event;
//     const payload = await req.text();
//     try {
//       event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//     } catch (err:any) {
//       console.error('Error verifying webhook signature:', err);
//       return res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     // Handle the event
//     switch (event.type) {
//       case 'checkout.session.completed':
        
//         break;
//       case 'invoice.payment_succeeded':
    
//         // Handle successful subscription payment
//         break;
//       // Add more cases for other event types you want to handle
//       default:
//         console.log(`Unhandled event type: ${event.type}`);
//     }

//     res.status(200).json({ received: true });
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };


import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20', // Use the latest API version
});

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
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
      return NextResponse.json({ message: 'Booking created successfully' });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 });
    }
  }

  // Return a response for other event types
  return NextResponse.json({ message: 'Received' });
}