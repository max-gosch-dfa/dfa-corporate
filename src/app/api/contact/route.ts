import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "max.gosch@desertfrontieradvisors.com";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "DFA Website <website@desertfrontieradvisors.com>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `[DFA Contact] ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message || "(no message)"}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
