// import { NextApiRequest, NextApiResponse } from 'next';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { amount, name, date, time, pickupAddress, dropoffAddress, carType } = req.body;
// console.log(amount, name, date, time, pickupAddress, dropoffAddress, carType)
//       // Create Checkout Sessions from body params.
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items: [
//           {
//             price_data: {
//               currency: 'usd',
//               product_data: {
//                 name: 'Ride Booking',
//                 description: `${date} ${time} - ${pickupAddress} to ${dropoffAddress} (${carType})`,
//               },
//               unit_amount: amount * 100, // amount in cents
//             },
//             quantity: 1,
//           },
//         ],
//         mode: 'payment',
//         success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//         cancel_url: `${req.headers.origin}/cancel`,
//         client_reference_id: name, // You can use this to link the session to your internal user ID
//       });

//       res.status(200).json({ id: session.id });
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
//       res.status(500).json({ statusCode: 500, message: errorMessage });
//     }
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }


// import { NextRequest, NextResponse } from "next/server";
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { amount, name, date, time, pickupAddress, dropoffAddress, carType } = body;

//     // Create Checkout Sessions from body params.
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'Ride Booking',
//               description: `${date} ${time} - ${pickupAddress} to ${dropoffAddress} (${carType})`,
//             },
//             unit_amount: amount * 100, // amount in cents
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${request.nextUrl.origin}/cancel`,
//       client_reference_id: name, // You can use this to link the session to your internal user ID
//     });

//     return NextResponse.json({ id: session.id }, { status: 200 });
//   } catch (err) {
//     const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
//     return NextResponse.json({ message: errorMessage }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20', // Specify the Stripe API version
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, name, phoneNumber, date, time, pickupAddress, dropoffAddress, carType } = body;

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Ride Booking',
              description: `${date} ${time} - ${pickupAddress} to ${dropoffAddress} (${carType})`,
            },
            unit_amount: Math.round(amount * 100), // amount in cents, rounded to avoid floating point issues
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/cancel`,
      client_reference_id: name,
      metadata: {
        full_name: name,
        phone_number: phoneNumber,
        date,
        time,
        pickup_address: pickupAddress,
        dropoff_address: dropoffAddress,
        car_type: carType,
        amount: amount.toString(),
      },
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    console.error('Error creating checkout session:', errorMessage);
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}