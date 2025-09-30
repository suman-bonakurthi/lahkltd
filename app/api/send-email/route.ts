import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, email } = await req.json();
    if (!fullName || !email) {
      return Response.json({ error: 'fullName and email are required' }, { status: 400 });
    }
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['bykendolu@gmail.com'],
      subject: `Hello ${fullName}!`,
      html: `
        <div style="font-family:sans-serif; text-align:center;">
          <h1>Hello, ${fullName}!</h1>
          <p>This is a test email from Resend API.</p>
        </div>
      `,
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}