export const metadata = { title: "FAQs | Reserved Suites Illovo" };

export default function FAQs() {
  const items = [
    { q: "What are check-in / check-out times?", a: "Check-in 14:00, check-out 10:00." },
    { q: "Is parking available?", a: "On-site parking available, subject to availability." },
  ];
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
      <div className="mt-6 divide-y divide-neutral-800">
        {items.map((it, i) => (
          <details key={i} className="py-4">
            <summary className="cursor-pointer font-medium">{it.q}</summary>
            <p className="mt-2 text-neutral-300">{it.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
