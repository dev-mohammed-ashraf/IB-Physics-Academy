import { NextRequest, NextResponse } from "next/server";

interface BuyerData {
  name?: string;
  email?: string;
  whatsapp?: string;
  country?: string;
}

interface EnrollRequestBody {
  intent?: "enroll" | "sample";
  buyerData?: BuyerData;
  unitName?: string;
  chapterName?: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body (kept for future use, e.g. saving to a database)
    await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Simulate a tiny delay so the frontend loading state is visible (good for UX)
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(
    { success: true, message: "Request received successfully" },
    { status: 200 }
  );
}
