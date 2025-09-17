export const metadata = {
  title: "Luxury Aparthotel Living in Illovo, Sandton | Reserved Suites",
  description: "Serviced apartments & hotel comforts with skyline views. Book direct for best rates.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold">Luxury Aparthotel Living in Illovo, Sandton</h1>
        <p className="max-w-2xl text-neutral-300">
          Spacious suites, skyline views, and hotel-level service — designed for business and long-stay comfort.
        </p>
        <div className="flex gap-3">
          <a href="/book" className="rounded-2xl bg-[var(--rs-gold)] px-5 py-2 font-medium text-black">Book Now</a>
          <a href="/suites" className="rounded-2xl border border-neutral-700 px-5 py-2">View Suites</a>
        </div>
      </section>
      {/* TODO: Highlights, Featured Suites, Corporate, Map, Offer */}
    </main>
  );
}

