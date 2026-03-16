import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

// Get subscription status for a customer
export async function GET(req: NextRequest) {
  const customerId = req.nextUrl.searchParams.get("customerId");

  if (!customerId) {
    return NextResponse.json({ status: "inactive" });
  }

  try {
    const stripe = getStripe();
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      status: "active",
      limit: 1,
    });

    if (subscriptions.data.length > 0) {
      const sub = subscriptions.data[0];
      // current_period_end is on subscription items in Stripe v20+
      const periodEnd = sub.items.data[0]?.current_period_end;
      return NextResponse.json({
        status: "active",
        currentPeriodEnd: periodEnd,
        cancelAtPeriodEnd: sub.cancel_at_period_end,
      });
    }

    return NextResponse.json({ status: "inactive" });
  } catch {
    return NextResponse.json({ status: "inactive" });
  }
}

// Cancel subscription
export async function DELETE(req: NextRequest) {
  try {
    const { subscriptionId } = await req.json();

    if (!subscriptionId) {
      return NextResponse.json({ error: "subscriptionId erforderlich" }, { status: 400 });
    }

    const stripe = getStripe();
    // Cancel at end of billing period (not immediately)
    const subscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });

    const periodEnd = subscription.items.data[0]?.current_period_end;
    return NextResponse.json({
      status: subscription.status,
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      currentPeriodEnd: periodEnd,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Kündigung fehlgeschlagen";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
