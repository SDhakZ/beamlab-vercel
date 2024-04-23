import EmailTemplate from "../../components/email-template/emailTemplate";
import { Resend } from "resend";
import axios from "axios";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const SECRET_KEY = process.env.HCAPTCHA_SECRET_KEY;

export async function POST(request) {
  try {
    const form = await request.formData();
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    const organization = form.get("organization");
    const token = form.get("token");

    const response = await axios.post(
      `https://api.hcaptcha.com/siteverify?response=${token}&secret=${SECRET_KEY}`,
      { headers: { "content-type": "application/x-www-form-urlencoded" } }
    );

    if (response.data.success) {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "sharnam34@gmail.com",
        subject: `Form submission from ${name} via TwelveLetter website`,
        react: (
          <EmailTemplate formData={{ name, email, message, organization }} />
        ),
      });
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: "Unsuccessful verification" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
