import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface BookSessionRequestBody {
  name?: string;
  email?: string;
  country?: string;
  timezone?: string;
  platform?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, country, timezone, platform } =
      (await request.json()) as BookSessionRequestBody;

    if (!name || !email || !country || !timezone || !platform) {
      return NextResponse.json(
        { error: "Missing booking details." },
        { status: 400 }
      );
    }

    if (process.env.RESEND_API_KEY && process.env.OWNER_EMAIL) {
      await resend.emails.send({
        from: "Get 7 With Maha <onboarding@resend.dev>",
        to: process.env.OWNER_EMAIL,
        subject: `📅 New Free Session Booking: ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
              <h2 style="margin: 0; color: #ffffff;">📅 New Session Booked!</h2>
            </div>
            <div style="padding: 20px;">
              <p style="font-size: 16px;">A student has just booked a free session. Here are the details:</p>

              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 5px 0;"><strong>👤 Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>📧 Email:</strong> ${email}</p>
                <p style="margin: 5px 0;"><strong>🌍 Country:</strong> ${country}</p>
                <p style="margin: 5px 0;"><strong>🕒 Timezone:</strong> ${timezone}</p>
                <p style="margin: 5px 0;"><strong>💻 Platform:</strong> ${platform}</p>
              </div>

              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 5px; font-weight: bold;">
                  ✉️ Send Email to Student
                </a>
              </div>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Book-session error:", error);
    return NextResponse.json(
      { error: "Failed to book session." },
      { status: 500 }
    );
  }
}
