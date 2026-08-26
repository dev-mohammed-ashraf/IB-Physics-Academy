const PAYPAL_BASE_URL =
  process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";

interface PayPalAccessTokenResponse {
  access_token: string;
}

export async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing PayPal API credentials.");
  }

  const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error(`Failed to get PayPal access token: ${response.status}`);
  }

  const data = (await response.json()) as PayPalAccessTokenResponse;
  return data.access_token;
}

export async function createPayPalOrder(
  accessToken: string,
  price: string
): Promise<string> {
  const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: price,
          },
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create PayPal order: ${response.status}`);
  }

  const order = (await response.json()) as { id: string };
  return order.id;
}

export async function capturePayPalOrder(
  accessToken: string,
  orderID: string
): Promise<unknown> {
  const response = await fetch(
    `${PAYPAL_BASE_URL}/v2/checkout/orders/${orderID}/capture`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.json();
  if (!response.ok) {
    console.error("PayPal API Error Details:", JSON.stringify(data, null, 2));
    throw new Error(
      `PayPal Error: ${(data as { name?: string }).name || response.status}`
    );
  }
  return data;
}
