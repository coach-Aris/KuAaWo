import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import Stripe from "stripe";

// Disable body parsing – Stripe needs the raw body for signature verification
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Webhook verification failed";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;

      if (userId) {
        // Update user subscription status in Firestore
        // When Firebase is connected, uncomment:
        // import { doc, updateDoc } from "firebase/firestore";
        // import { db } from "@/lib/firebase";
        // await updateDoc(doc(db, "users", userId), {
        //   stripeCustomerId: customerId,
        //   stripeSubscriptionId: subscriptionId,
        //   subscriptionStatus: "active",
        //   subscribedAt: new Date().toISOString(),
        // });
        console.log(`[Webhook] Abo aktiviert für User ${userId}`, { customerId, subscriptionId });
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const status = subscription.status;
      console.log(`[Webhook] Abo-Status geändert: ${subscription.id} → ${status}`);
      // Update Firestore subscription status
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      console.log(`[Webhook] Abo gekündigt: ${subscription.id}`);
      // Set subscription status to "cancelled" in Firestore
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log(`[Webhook] Zahlung fehlgeschlagen: ${invoice.id}`);
      // Notify user or update status
      break;
    }

    default:
      console.log(`[Webhook] Unhandled event: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
