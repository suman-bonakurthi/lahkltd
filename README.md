Setting Up the Contact Form and Google reCAPTCHA

Step 1: Configure Google reCAPTCHA

Open your .env file and add your Google reCAPTCHA Site Key and Secret Key.

Make sure the keys are linked to your website’s URL for them to work properly.

RESEND_API_KEY=your_resend_api_key_here
RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here


Step 2: Add Your Resend API Key

Create an account at Resend
 and get your API key.

Add the API key to your .env file (see above).

Step 3: Configure Email and Logo in route.ts

Open app/api/contact/route.ts.

Line 28: Update the to email address to the one you want form submissions to be sent to:

to: ['your_email@example.com'], // <-- replace with your real email


Line 46: Replace the logo URL with your website’s full URL. If you don’t, the logo will not appear in the email template:

<img src="https://yourwebsite.com/assets/logo.jpg" alt="Your Logo" />


✅ That’s it! After these steps, your contact form will send emails to your chosen address, display your logo correctly, and be protected by Google reCAPTCHA.