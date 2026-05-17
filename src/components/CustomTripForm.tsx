'use client';

import { useState, FormEvent } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9]+$/;

export type CustomTripFormCopy = {
  heading: string;
  intro: string;
  labels: {
    name: string;
    email: string;
    phone: string;
    preferredDate: string;
    groupSize: string;
    interests: string;
    notes: string;
  };
  placeholders: { phone: string; groupSize: string };
  validation: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    phoneInvalid: string;
    preferredDateRequired: string;
    preferredDateUnavailable: string;
    groupSizeRequired: string;
  };
  mailto: {
    subject: string;
    bodyLines: {
      name: string;
      email: string;
      phone: string;
      preferredDate: string;
      groupSize: string;
      interests: string;
      notes: string;
    };
  };
  success: string;
  /** Shown when no server message (network/API error). */
  errorGeneric: string;
  errorEmailPrompt: string;
  errorOr: string;
  submitSending: string;
  submitMailto: string;
  submitSend: string;
};

export const DEFAULT_CUSTOM_TRIP_FORM_COPY: CustomTripFormCopy = {
  heading: 'Request a luxury trip',
  intro:
    'Tell us your dates, group size and what you’d like to see. You can also use this form to inquire about our 2-hour tours. We’ll get back to you shortly.',
  labels: {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    preferredDate: 'Preferred date',
    groupSize: 'Group size',
    interests: 'Interests (e.g. caves, puffins, photography)',
    notes: 'Notes',
  },
  placeholders: {
    phone: 'e.g. 3541234567 or +3541234567',
    groupSize: 'e.g. 6 adults, 2 children',
  },
  validation: {
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email address',
    phoneRequired: 'Phone number is required',
    phoneInvalid: 'Phone number may only contain numbers and an optional + at the start',
    preferredDateRequired: 'Preferred date is required',
    preferredDateUnavailable: 'This date is not available for luxury trips. Please choose another.',
    groupSizeRequired: 'Group size is required',
  },
  mailto: {
    subject: 'Luxury trip inquiry — Island Adventures',
    bodyLines: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      preferredDate: 'Preferred date',
      groupSize: 'Group size',
      interests: 'Interests',
      notes: 'Notes',
    },
  },
  success: 'Thanks! We’ll be in touch soon.',
  errorGeneric: 'Something went wrong. ',
  errorEmailPrompt: 'Please email us at',
  errorOr: 'or',
  submitSending: 'Sending…',
  submitMailto: 'Open email to send',
  submitSend: 'Send request',
};

type CustomTripFormProps = {
  apiEndpoint?: string;
  fallbackEmail?: string;
  copy?: CustomTripFormCopy;
};

const defaultEmail = 'booking@islandadventures.is';

function validateForm(
  formData: { name: string; email: string; phone: string; preferredDate: string; groupSize: string },
  v: CustomTripFormCopy['validation']
) {
  const errors: Record<string, string> = {};
  if (!formData.name.trim()) errors.name = v.nameRequired;
  if (!formData.email.trim()) {
    errors.email = v.emailRequired;
  } else if (!EMAIL_REGEX.test(formData.email.trim())) {
    errors.email = v.emailInvalid;
  }
  const phoneDigits = formData.phone.replace(/\s/g, '');
  if (!phoneDigits) {
    errors.phone = v.phoneRequired;
  } else if (!PHONE_REGEX.test(phoneDigits) || /[a-zA-Z]/.test(formData.phone)) {
    errors.phone = v.phoneInvalid;
  }
  if (!formData.preferredDate) {
    errors.preferredDate = v.preferredDateRequired;
  } else {
    const d = formData.preferredDate;
    if (d < '2026-05-01' || d > '2026-09-30') {
      errors.preferredDate = v.preferredDateUnavailable;
    }
  }
  if (!formData.groupSize.trim()) errors.groupSize = v.groupSizeRequired;
  return errors;
}

export function CustomTripForm({
  apiEndpoint,
  fallbackEmail = defaultEmail,
  copy = DEFAULT_CUSTOM_TRIP_FORM_COPY,
}: CustomTripFormProps) {
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
    const errors = validateForm(formData, copy.validation);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    if (useMailto) {
      const subject = encodeURIComponent(copy.mailto.subject);
      const { bodyLines } = copy.mailto;
      const body = encodeURIComponent(
        `${bodyLines.name}: ${formData.name}\n${bodyLines.email}: ${formData.email}\n${bodyLines.phone}: ${formData.phone}\n${bodyLines.preferredDate}: ${formData.preferredDate}\n${bodyLines.groupSize}: ${formData.groupSize}\n${bodyLines.interests}: ${formData.interests}\n${bodyLines.notes}: ${formData.notes}`
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
        {copy.heading}
      </h2>
      <p className="text-sm text-gray-600">{copy.intro}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="custom-name" className="block text-sm font-medium text-alpine-dark">
            {copy.labels.name} <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="custom-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData((p) => ({ ...p, name: e.target.value }));
              setFieldErrors((err) => ({ ...err, name: '' }));
            }}
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
            {copy.labels.email} <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="custom-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData((p) => ({ ...p, email: e.target.value }));
              setFieldErrors((err) => ({ ...err, email: '' }));
            }}
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
          {copy.labels.phone} <span className="text-red-600" aria-hidden>*</span>
        </label>
        <input
          id="custom-phone"
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          className={inputClassName('phone')}
          autoComplete="tel"
          placeholder={copy.placeholders.phone}
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
            {copy.labels.preferredDate} <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="custom-date"
            type="date"
            required
            min="2026-05-01"
            max="2026-09-30"
            value={formData.preferredDate}
            onChange={(e) => {
              setFormData((p) => ({ ...p, preferredDate: e.target.value }));
              setFieldErrors((err) => ({ ...err, preferredDate: '' }));
            }}
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
            {copy.labels.groupSize} <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="custom-group"
            type="text"
            required
            value={formData.groupSize}
            onChange={(e) => {
              setFormData((p) => ({ ...p, groupSize: e.target.value }));
              setFieldErrors((err) => ({ ...err, groupSize: '' }));
            }}
            placeholder={copy.placeholders.groupSize}
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
          {copy.labels.interests}
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
          {copy.labels.notes}
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
          {copy.success}
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-800" role="alert">
          {fieldErrors._form ? `${fieldErrors._form} ` : copy.errorGeneric}
          {copy.errorEmailPrompt}{' '}
          <a href={`mailto:${fallbackEmail}`} className="font-medium underline">
            {fallbackEmail}
          </a>{' '}
          {copy.errorOr}{' '}
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
        {status === 'sending' ? copy.submitSending : useMailto ? copy.submitMailto : copy.submitSend}
      </button>
    </form>
  );
}
