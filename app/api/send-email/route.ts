// ./app/api/send-email/route.ts
import { Resend } from 'resend';
import { renderToStaticMarkup } from 'react-dom/server';
import { EmailTemplate, EmailTemplateProps } from '../../components/EmailTemplate';

// ⚡ Resend API KEY FROM ENV
if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Json Data 
    const { firstName, email } = await req.json();

    // ⚠️ Must be filled
    if (!firstName || !email) {
      return new Response(
        JSON.stringify({ error: 'firstName and email are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ⚡ EmailTemplate props
    const props: EmailTemplateProps = { firstName };

    // JSX -> HTML string
    const emailHtml = renderToStaticMarkup(
      EmailTemplate(props)
    );

    // ⚠️ Must be filled
    const { data, error } = await resend.emails.send({
      from: 'Your Company <info@yourdomain.com>', // Change: your brand and email
      to: [email],                                 // Change: recipient's email (from form)
      subject: `Welcome, ${firstName}!`,          // Email subject
      html: emailHtml,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(
      JSON.stringify({ message: 'Email sent', data }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
