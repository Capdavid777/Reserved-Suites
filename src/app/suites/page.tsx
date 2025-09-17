export const metadata = { title: "Suites & Apartments | Reserved Suites Illovo" };

export default function SuitesIndex() {
  const suites = [
    { slug: "queen-room", name: "Queen Room" },
    { slug: "deluxe-studio", name: "Deluxe Studio" },
    { slug: "one-bedroom", name: "One-Bedroom" },
    { slug: "two-bedroom", name: "Two-Bedroom" },
    
  ];
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold">Suites & Apartments</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {suites.map((s) => (
          <a key={s.slug} href={`/suites/${s.slug}`} className="rounded-2xl border border-neutral-800 p-5 hover:border-[var(--rs-gold)]">
            <h2 className="text-xl">{s.name}</h2>
            <p className="mt-2 text-sm text-neutral-400">Fully serviced with hotel comforts.</p>
          </a>
        ))}
      </div>
    </main>
  );
}

