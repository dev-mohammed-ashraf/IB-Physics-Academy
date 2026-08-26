import { NextRequest, NextResponse } from "next/server";
import { getPayPalAccessToken, createPayPalOrder } from "@/lib/paypal";

interface CreateOrderRequestBody {
  price?: string | number;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateOrderRequestBody;
    const rawPrice =
      typeof body.price === "number"
        ? body.price.toString()
        : (body.price ?? "0");
    const priceValue = rawPrice.replace(/[^0-9.]/g, "");

    if (!priceValue || parseFloat(priceValue) <= 0) {
      return NextResponse.json(
        { error: "Invalid price." },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();
    const orderID = await createPayPalOrder(accessToken, priceValue);

    return NextResponse.json({ id: orderID });
  } catch (error) {
    console.error("PayPal create-order error:", error);
    return NextResponse.json(
      { error: "Failed to create PayPal order." },
      { status: 500 }
    );
  }
}
