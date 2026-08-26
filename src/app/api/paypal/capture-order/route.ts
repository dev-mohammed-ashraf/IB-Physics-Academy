import { NextRequest, NextResponse } from "next/server";
import { getPayPalAccessToken, capturePayPalOrder } from "@/lib/paypal";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface BuyerData {
  name?: string;
  email?: string;
  whatsapp?: string;
  country?: string;
}

interface CaptureOrderRequestBody {
  orderID?: string;
  buyerData?: BuyerData;
  unitName?: string;
  chapterName?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CaptureOrderRequestBody;
    const orderID = body.orderID;
    const buyerData = body.buyerData;
    const unitName = body.unitName;
    const chapterName = body.chapterName;

    if (!orderID) {
      return NextResponse.json(
        { error: "Missing orderID." },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();
    const captureDetails = (await capturePayPalOrder(
      accessToken,
      orderID
    )) as { status?: string };

    if (
      captureDetails.status === "COMPLETED" &&
      process.env.RESEND_API_KEY &&
      process.env.OWNER_EMAIL &&
      buyerData
    ) {
      const cleanWhatsApp = (buyerData.whatsapp ?? "").replace(/[^\d+]/g, "");

      try {
        await resend.emails.send({
          from: "Get 7 With Maha <onboarding@resend.dev>",
          to: process.env.OWNER_EMAIL,
          subject: `🎉 New Course Purchase: ${buyerData.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
              <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 2px solid #eaeaea;">
                <h2 style="margin: 0; color: #111;">🎉 New Purchase Alert!</h2>
              </div>
              <div style="padding: 20px;">
                <p style="font-size: 16px;">A student has just purchased a chapter. Here are the details:</p>

                <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
                  <h3 style="margin-top: 0; color: #2563eb;">📚 ${unitName || "Unit"} - ${chapterName || "Chapter"}</h3>
                  <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${buyerData.name}</p>
                  <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${buyerData.email}</p>
                  <p style="margin: 5px 0;"><strong>📱 WhatsApp:</strong> ${buyerData.whatsapp}</p>
                  <p style="margin: 5px 0;"><strong>🌍 Country:</strong> ${buyerData.country}</p>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                  <a href="https://wa.me/${cleanWhatsApp}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 5px; font-weight: bold; margin: 5px;">
                    💬 Chat on WhatsApp
                  </a>
                  <a href="mailto:${buyerData.email}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 5px; font-weight: bold; margin: 5px;">
                    ✉️ Send Email
                  </a>
                </div>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send owner notification email:", emailError);
      }
    }

    return NextResponse.json({ details: captureDetails });
  } catch (error) {
    console.error("PayPal capture-order error:", error);
    return NextResponse.json(
      { error: "Failed to capture PayPal order." },
      { status: 500 }
    );
  }
}
