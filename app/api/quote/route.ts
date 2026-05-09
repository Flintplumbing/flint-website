import { Resend } from "resend";

const resend = new Resend("re_KRdwdryT_DCRxTyXL8HpomG51QYJDnFzV");

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, phone, postcode, message, estimate } = data;

    await resend.emails.send({
      from: "FLINT Website <onboarding@resend.dev>",
      to: "flint.plumbing.heating@gmail.com",
      subject: "New FLINT Website Quote Enquiry",
      html: `
        <h2>New Quote Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Postcode:</strong> ${postcode}</p>
        <p><strong>Estimate:</strong> ${estimate}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Email failed to send" },
      { status: 500 }
    );
  }
}