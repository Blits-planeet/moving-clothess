import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { items } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    currency: 'eur',
    line_items: items,
    success_url: 'https://yourdomain.com/success',
    cancel_url: 'https://yourdomain.com'
  });

  return Response.json({ url: session.url });
}
