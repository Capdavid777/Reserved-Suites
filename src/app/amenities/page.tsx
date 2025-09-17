export const metadata = { title: "Amenities & Lifestyle | Reserved Suites Illovo" };

export default function Amenities() {
  const items = [
    { slug: "pool-rooftop", name: "Pool & Rooftop" },
    { slug: "fitness", name: "Fitness" },
    { slug: "cafe", name: "Café" },
    { slug: "conferencing", name: "Conferencing" },
  ];
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold">Amenities & Lifestyle</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <a key={it.slug} href={`/amenities/${it.slug}`} className="rounded-2xl border border-neutral-800 p-5 hover:border-[var(--rs-gold)]">
            <h2 className="text-xl">{it.name}</h2>
          </a>
        ))}
      </div>
    </main>
  );
}

