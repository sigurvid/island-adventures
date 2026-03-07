'use client';

import { useState, FormEvent } from 'react';

type CustomTripFormProps = {
  /** Use API route (e.g. /api/custom-trip). If not set, form uses mailto fallback. */
  apiEndpoint?: string;
  /** Email for mailto fallback (e.g. custom@example.com) */
  fallbackEmail?: string;
};

const defaultEmail = 'booking@islandadventures.is';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9]+$/;

function validateForm(formData: { name: string; email: string; phone: string; preferredDate: string; groupSize: string }) {
  const errors: Record<string, string> = {};
  if (!formData.name.trim()) errors.name = 'Name is required';
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!EMAIL_REGEX.test(formData.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }
  const phoneDigits = formData.phone.replace(/\s/g, '');
  if (!phoneDigits) {
    errors.phone = 'Phone number is required';
  } else if (!PHONE_REGEX.test(phoneDigits) || /[a-zA-Z]/.test(formData.phone)) {
    errors.phone = 'Phone number may only contain numbers and an optional + at the start';
  }
  if (!formData.preferredDate) {
    errors.preferredDate = 'Preferred date is required';
  } else {
    const d = formData.preferredDate;
    if (d < '2026-05-01' || d > '2026-09-30') {
      errors.preferredDate = 'This date is not available for custom trips. Please choose another.';
    }
  }
  if (!formData.groupSize.trim()) errors.groupSize = 'Group size is required';
  return errors;
}

export function CustomTripForm({ apiEndpoint, fallbackEmail = defaultEmail }: CustomTripFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    groupSize: '',
    interests: '',
    notes: '',
  });

  const useMailto = !apiEndpoint;

  const handlePhoneChange = (value: string) => {
    const digitsAndPlus = value.replace(/[^0-9+]/g, '');
    setFormData((p) => ({ ...p, phone: digitsAndPlus }));
    setFieldErrors((e) => ({ ...e, phone: '' }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    if (useMailto) {
      const subject = encodeURIComponent('Custom trip inquiry — Island Adventures');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred date: ${formData.preferredDate}\nGroup size: ${formData.groupSize}\nInterests: ${formData.interests}\nNotes: ${formData.notes}`
      );
      window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 400 && typeof data.error === 'string') {
          setFieldErrors({ _form: data.error });
        }
        setStatus('error');
        return;
      }
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', preferredDate: '', groupSize: '', interests: '', notes: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClassName = (field: string) =>
    `mt-1 block w-full rounded-lg border px-3 py-2 text-gray-900 shadow-sm focus:ring-1 focus:ring-alpine ${
      fieldErrors[field] ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-alpine'
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-labelledby="custom-trip-heading"
      noValidate
    >
      <h2 id="custom-trip-heading" className="section-heading">
        Request a custom trip
      </h2>
      <p className="text-sm text-gray-600">
        Tell us your dates, group size and what you’d like to see. We’ll get back to you shortly.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="custom-name" className="block text-sm font-medium text-alpine-dark">
            Name <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="custom-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => { setFormData((p) => ({ ...p, name: e.target.value })); setFieldErrors((err) => ({ ...err, name: '' })); }}
            className={inputClassName('name')}
            autoComplete="name"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? 'custom-name-error' : undefined}
          />
          {fieldErrors.name && (
            <p id="custom-name-error" className="mt-1 text-sm text-red-600" role="alert">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="custom-email" className="block text-sm font-medium text-alpine-dark">
            Email <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="custom-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => { setFormData((p) => ({ ...p, email: e.target.value })); setFieldErrors((err) => ({ ...err, email: '' })); }}
            className={inputClassName('email')}
            autoComplete="email"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? 'custom-email-error' : undefined}
          />
          {fieldErrors.email && (
            <p id="custom-email-error" className="mt-1 text-sm text-red-600" role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="custom-phone" className="block text-sm font-medium text-alpine-dark">
          Phone <span className="text-red-600" aria-hidden>*</span>
        </label>
        <input
          id="custom-phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          className={inputClassName('phone')}
          autoComplete="tel"
          placeholder="e.g. 3541234567 or +3541234567"
          aria-invalid={!!fieldErrors.phone}
          aria-describedby={fieldErrors.phone ? 'custom-phone-error' : undefined}
        />
        {fieldErrors.phone && (
          <p id="custom-phone-error" className="mt-1 text-sm text-red-600" role="alert">
            {fieldErrors.phone}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="custom-date" className="block text-sm font-medium text-alpine-dark">
            Preferred date <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="custom-date"
            type="date"
            required
            min="2026-05-01"
            max="2026-09-30"
            value={formData.preferredDate}
            onChange={(e) => { setFormData((p) => ({ ...p, preferredDate: e.target.value })); setFieldErrors((err) => ({ ...err, preferredDate: '' })); }}
            className={inputClassName('preferredDate')}
            aria-invalid={!!fieldErrors.preferredDate}
            aria-describedby={fieldErrors.preferredDate ? 'custom-date-error' : undefined}
          />
          {fieldErrors.preferredDate && (
            <p id="custom-date-error" className="mt-1 text-sm text-red-600" role="alert">
              {fieldErrors.preferredDate}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="custom-group" className="block text-sm font-medium text-alpine-dark">
            Group size <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="custom-group"
            type="text"
            required
            value={formData.groupSize}
            onChange={(e) => { setFormData((p) => ({ ...p, groupSize: e.target.value })); setFieldErrors((err) => ({ ...err, groupSize: '' })); }}
            placeholder="e.g. 6 adults, 2 children"
            className={inputClassName('groupSize')}
            aria-invalid={!!fieldErrors.groupSize}
            aria-describedby={fieldErrors.groupSize ? 'custom-group-error' : undefined}
          />
          {fieldErrors.groupSize && (
            <p id="custom-group-error" className="mt-1 text-sm text-red-600" role="alert">
              {fieldErrors.groupSize}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="custom-interests" className="block text-sm font-medium text-alpine-dark">
          Interests (e.g. caves, puffins, photography)
        </label>
        <input
          id="custom-interests"
          type="text"
          value={formData.interests}
          onChange={(e) => setFormData((p) => ({ ...p, interests: e.target.value }))}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-alpine focus:ring-1 focus:ring-alpine"
        />
      </div>

      <div>
        <label htmlFor="custom-notes" className="block text-sm font-medium text-alpine-dark">
          Notes
        </label>
        <textarea
          id="custom-notes"
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-alpine focus:ring-1 focus:ring-alpine"
        />
      </div>

      {status === 'success' && (
        <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800" role="status">
          Thanks! We’ll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-800" role="alert">
          {fieldErrors._form ? `${fieldErrors._form} ` : 'Something went wrong. '}
          Please email us at{' '}
          <a href={`mailto:${fallbackEmail}`} className="font-medium underline">
            {fallbackEmail}
          </a>
          {' '}or{' '}
          <a href="mailto:booking@islandadventures.com" className="font-medium underline">
            booking@islandadventures.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full sm:w-auto disabled:opacity-70"
      >
        {status === 'sending' ? 'Sending…' : useMailto ? 'Open email to send' : 'Send request'}
      </button>
    </form>
  );
}
