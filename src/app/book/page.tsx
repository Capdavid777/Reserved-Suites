export const metadata = { title: "Book Now | Reserved Suites Illovo" };

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_IFRAME_URL || "https://your.booking.engine.example";

export default function Book() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Book Direct</h1>
      <p className="mt-2 text-neutral-300">Best Rate • Secure • Instant Confirmation</p>
      <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-800">
        <iframe
          src={BOOKING_URL}
          title="Booking Engine"
          className="h-[80vh] w-full"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* Optional: add quick FAQs below */}
    </main>
  );
}

