export const metadata = { title: "Queen Room | Reserved Suites Illovo" };

export default function QueenRoom() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Queen Room</h1>
      <p className="mt-3 text-neutral-300">Elegant, perfectly-proportioned accommodation ideal for solo travellers and couples.</p>
      {/* TODO: gallery, key facts, amenities, rates CTA */}
      <div className="mt-6">
        <a href="/book" className="rounded-xl bg-[var(--rs-gold)] px-5 py-2 font-medium text-black">Book Now</a>
      </div>
    </main>
  );
}
