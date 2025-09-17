export const metadata = { title: "Deluxe Studio | Reserved Suites Illovo" };

export default function DeluxeStudio() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Deluxe Studio</h1>
      <p className="mt-3 text-neutral-300">Spacious open-plan living with skyline views and premium amenities.</p>
      {/* TODO: gallery, key facts, amenities, rates CTA */}
      <div className="mt-6">
        <a href="/book" className="rounded-xl bg-[var(--rs-gold)] px-5 py-2 font-medium text-black">Book Now</a>
      </div>
    </main>
  );
}

