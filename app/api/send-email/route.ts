import { Resend } from 'resend';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { EmailTemplate, EmailTemplateProps } from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName } = await req.json();

    // Props'u tip ile belirle
    const props: EmailTemplateProps = { firstName: firstName || 'John' };

    // JSX -> HTML string
    const emailHtml = ReactDOMServer.renderToStaticMarkup(
      React.createElement(EmailTemplate, props)
    );

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Acme <info@yourwebsite.com>',
      to: ['yourmail@example.com'], // yourmail
      subject: 'Welcome!',
      html: emailHtml,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Email sent', data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
