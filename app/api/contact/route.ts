import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  const { fullName, email, company, service, message, token } = await req.json();

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verify = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    }
  );
  const data = await verify.json();

  if (!data.success) {
    return NextResponse.json({ message: 'reCAPTCHA failed' }, { status: 400 });
  }

  // Prepare and send email using Resend
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: 'L&A Contact Form <contact@yourwebsite.com>',
      to: ['youremail@example.com'],
      subject: `New Contact Form Submission - ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #f5f5f5;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
                <tr>
                    <td align="center">
                        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                            
                            <!-- Logo -->
                            <tr>
                                <td align="center" style="padding: 40px 40px 20px 40px;">
                    
                                    <img src="https://yourwebsite.com/assets/logo.jpg" alt="L&A Logo" style="max-width: 150px; height: auto;" />
                                </td>
                            </tr>

                            <!-- Title -->
                            <tr>
                                <td align="center" style="padding: 0 40px 30px 40px;">
                                    <h1 style="margin: 0; color: #1a365d; font-size: 28px; font-weight: 700; line-height: 1.3;">
                                        Requesting quote for new Service.
                                    </h1>
                                </td>
                            </tr>

                            <!-- Subtitle -->
                            <tr>
                                <td align="center" style="padding: 0 40px 30px 40px;">
                                    <p style="margin: 0; color: #718096; font-size: 15px; line-height: 1.6;">
                                        A new contact form has been submitted on the website. Please find the details below.
                                    </p>
                                </td>
                            </tr>

                            <!-- Form Details Box -->
                            <tr>
                                <td style="padding: 0 40px 40px 40px;">
                                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7fafc; border: 1px solid #e2e8f0; border-radius: 6px;">
                                        <tr>
                                            <td style="padding: 24px;">
                                                
                                                <!-- Full Name -->
                                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                                                    <tr>
                                                        <td style="padding-bottom: 4px;">
                                                            <strong style="color: #2d3748; font-size: 14px; font-weight: 600;">Full Name:</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style="color: #4a5568; font-size: 14px;">${fullName}</span>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <!-- Email Address -->
                                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                                                    <tr>
                                                        <td style="padding-bottom: 4px;">
                                                            <strong style="color: #2d3748; font-size: 14px; font-weight: 600;">Email Address:</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="mailto:${email}" style="color: #3182ce; font-size: 14px; text-decoration: none;">${email}</a>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <!-- Company Name -->
                                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 16px;">
                                                    <tr>
                                                        <td style="padding-bottom: 4px;">
                                                            <strong style="color: #2d3748; font-size: 14px; font-weight: 600;">Company Name:</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style="color: #4a5568; font-size: 14px;">${company || 'N/A'}</span>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <!-- Service of Interest -->
                                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                                                    <tr>
                                                        <td style="padding-bottom: 4px;">
                                                            <strong style="color: #2d3748; font-size: 14px; font-weight: 600;">Service of Interest:</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span style="color: #4a5568; font-size: 14px;">${service}</span>
                                                        </td>
                                                    </tr>
                                                </table>

                                                <!-- Divider -->
                                                <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                                                    <tr>
                                                        <td style="border-top: 1px solid #e2e8f0;"></td>
                                                    </tr>
                                                </table>

                                                <!-- Enquiry Message -->
                                                <table width="100%" cellpadding="0" cellspacing="0">
                                                    <tr>
                                                        <td style="padding-bottom: 8px;">
                                                            <strong style="color: #2d3748; font-size: 14px; font-weight: 600;">Enquiry Message:</strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p style="margin: 0; color: #4a5568; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message || 'No message provided'}</p>
                                                        </td>
                                                    </tr>
                                                </table>

                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td align="center" style="padding: 0 40px 20px 40px;">
                                    <p style="margin: 0; color: #718096; font-size: 14px;">
                                        Regards,
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0 40px 30px 40px;">
                                    <p style="margin: 0; color: #1a365d; font-size: 15px; font-weight: 600;">
                                        The L&A Team
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0 40px 40px 40px;">
                                    <p style="margin: 0; color: #a0aec0; font-size: 13px; font-style: italic;">
                                        This is an automated notification from the L&A website.
                                    </p>
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
      `,
    });
    if (error) {
      return NextResponse.json({ message: 'Email send error', error }, { status: 500 });
    }
    return NextResponse.json({ message: 'Message received and email sent', emailData });
  } catch (err) {
    return NextResponse.json({ message: 'Email send exception', error: (err as Error).message }, { status: 500 });
  }
}