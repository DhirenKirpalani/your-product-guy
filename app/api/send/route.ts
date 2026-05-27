import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = "dhirenkirpalani2308@gmail.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type } = body;

    if (type === "booking") {
      const { name, business, email } = body;
      await resend.emails.send({
        from:    "Your Product Guy <onboarding@resend.dev>",
        to:      TO,
        subject: `New setup call request — ${name}`,
        html: `
          <h2>New Automation Setup Call Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Business:</strong> ${business || "—"}</p>
          <p><strong>Email:</strong> ${email}</p>
        `,
      });
    } else if (type === "contribute") {
      const { name, email, role, message } = body;
      await resend.emails.send({
        from:    "Your Product Guy <onboarding@resend.dev>",
        to:      TO,
        subject: `New contributor — ${role} · ${name}`,
        html: `
          <h2>New Contributor Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Message:</strong> ${message || "—"}</p>
        `,
      });
    } else {
      return NextResponse.json({ error: "Unknown type" }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
