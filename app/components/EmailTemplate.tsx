// components/EmailTemplate.tsx
import React from 'react';

export interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Welcome, {firstName}!</h1>
      <p>Thank you for joining us.</p>
    </div>
  );
}
