import { NextRequest, NextResponse } from "next/server";
import { getPayPalAccessToken, capturePayPalOrder } from "@/lib/paypal";

interface CaptureOrderRequestBody {
  orderID?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CaptureOrderRequestBody;
    const orderID = body.orderID;

    if (!orderID) {
      return NextResponse.json(
        { error: "Missing orderID." },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();
    const captureDetails = await capturePayPalOrder(accessToken, orderID);

    return NextResponse.json({ details: captureDetails });
  } catch (error) {
    console.error("PayPal capture-order error:", error);
    return NextResponse.json(
      { error: "Failed to capture PayPal order." },
      { status: 500 }
    );
  }
}
