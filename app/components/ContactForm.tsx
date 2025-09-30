'use client'; // bu önemli, fetch işlemi client tarafında çalışacak

import React from 'react';

export default function ContactPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'YOUR_ACCESS_KEY_HERE', // Web3Forms'tan aldığın Access Key
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert('Mesaj gönderildi!');
      form.reset();
    } else {
      alert('Gönderim sırasında hata oluştu.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto py-10">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required placeholder="email@example.com" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" required rows={3} placeholder="Enter Message"></textarea>
      </div>
      <button type="submit">Submit Form</button>
    </form>
  );
}
