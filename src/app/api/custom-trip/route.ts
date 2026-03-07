import { NextRequest, NextResponse } from 'next/server';

/**
 * Custom trip inquiry — email via Resend or SendGrid.
 *
 * Env vars (choose one):
 * - RESEND_API_KEY + NEXT_PUBLIC_FROM_EMAIL + NEXT_PUBLIC_TO_EMAIL (Resend)
 * - SENDGRID_API_KEY + NEXT_PUBLIC_FROM_EMAIL + NEXT_PUBLIC_TO_EMAIL (SendGrid)
 *
 * If neither is set, returns 501 with a message to use mailto fallback.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, preferredDate, groupSize, interests, notes } = body as {
      name?: string;
      email?: string;
      phone?: string;
      preferredDate?: string;
      groupSize?: string;
      interests?: string;
      notes?: string;
    };

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PHONE_REGEX = /^\+?[0-9]+$/;

    const errors: string[] = [];
    if (!name?.trim()) errors.push('Name is required');
    if (!email?.trim()) {
      errors.push('Email is required');
    } else if (!EMAIL_REGEX.test(email.trim())) {
      errors.push('Please provide a valid email address');
    }
    const phoneTrimmed = (phone ?? '').replace(/\s/g, '');
    if (!phoneTrimmed) {
      errors.push('Phone number is required');
    } else if (!PHONE_REGEX.test(phoneTrimmed) || /[a-zA-Z]/.test(phone ?? '')) {
      errors.push('Phone number may only contain numbers and an optional + at the start');
    }
    if (!preferredDate?.trim()) errors.push('Preferred date is required');
    if (!groupSize?.trim()) errors.push('Group size is required');

    if (errors.length > 0) {
      return NextResponse.json(
        { error: errors.join('. ') },
        { status: 400 }
      );
    }

    const toEmail = process.env.NEXT_PUBLIC_TO_EMAIL || process.env.CUSTOM_TRIP_TO_EMAIL;
    const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL || process.env.CUSTOM_TRIP_FROM_EMAIL;

    // Resend
    if (process.env.RESEND_API_KEY && toEmail && fromEmail) {
      const text = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || '—'}`,
        `Preferred date: ${preferredDate || '—'}`,
        `Group size: ${groupSize || '—'}`,
        `Interests: ${interests || '—'}`,
        `Notes: ${notes || '—'}`,
      ].join('\n');

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          subject: `Custom trip inquiry — ${name}`,
          text,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error('Resend error:', err);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
      }
      return NextResponse.json({ ok: true });
    }

    // SendGrid (optional alternative)
    if (process.env.SENDGRID_API_KEY && toEmail && fromEmail) {
      const text = [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || '—'}`,
        `Preferred date: ${preferredDate || '—'}`,
        `Group size: ${groupSize || '—'}`,
        `Interests: ${interests || '—'}`,
        `Notes: ${notes || '—'}`,
      ].join('\n');

      const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: toEmail }] }],
          from: { email: fromEmail, name: 'Island Adventures' },
          subject: `Custom trip inquiry — ${name}`,
          content: [{ type: 'text/plain', value: text }],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error('SendGrid error:', err);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
      }
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { error: 'Email not configured. Use mailto fallback or set RESEND_API_KEY / SENDGRID_API_KEY and email env vars.' },
      { status: 501 }
    );
  } catch (e) {
    console.error('custom-trip API error:', e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
