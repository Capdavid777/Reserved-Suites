export const metadata = { title: "One-Bedroom Suite | Reserved Suites Illovo" };

export default function OneBedroom() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">One-Bedroom Suite</h1>
      <p className="mt-3 text-neutral-300">Spacious apartment living with separate bedroom, lounge and kitchenette.</p>
      {/* TODO: gallery, key facts, amenities, rates CTA */}
      <div className="mt-6">
        <a href="/book" className="rounded-xl bg-[var(--rs-gold)] px-5 py-2 font-medium text-black">Book Now</a>
      </div>
    </main>
  );
}

