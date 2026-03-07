import type { ReactNode } from 'react';

type BookingWidgetProps = {
  id: string;
  title: string;
  children?: ReactNode;
  /** Placeholder for Bókun embed code snippet (HTML string). Leave as comment in usage. */
  embedCode?: string;
};

/**
 * Reusable booking widget wrapper.
 * In Bókun: Product → Widget/Embed → copy the generated snippet.
 * Paste the script + div content into this component or inject via embedCode.
 *
 * <!-- Paste Bókun generated embed code here -->
 */
export function BookingWidget({ id, title, children }: BookingWidgetProps) {
  return (
    <section
      id={id}
      className="rounded-xl border border-alpine/20 bg-white p-4 shadow-sm sm:p-6"
      aria-labelledby={`${id}-heading`}
    >
      <h2 id={`${id}-heading`} className="section-heading mb-4">
        {title}
      </h2>
      {children ?? (
        <div
          id={id}
          className="min-h-[280px] rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-sm"
          data-bokun-widget-placeholder
        >
          {/* Bókun embed: replace this div's content with the widget markup, or load script that targets this id */}
          {/* Paste Bókun generated embed code here */}
          <span>Booking widget loads here (Bókun)</span>
        </div>
      )}
    </section>
  );
}
