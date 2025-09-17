import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug.replace(/-/g, " ")} | Offers | Reserved Suites`,
    description: "Exclusive package — book direct for the best rate.",
  };
}

// Optional: generateStaticParams if you prebuild offers
export default function OfferDetail({ params }: Props) {
  const { slug } = params;
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold capitalize">{slug.replace(/-/g, " ")}</h1>
      <p className="mt-3 text-neutral-300">Offer details go here.</p>
      <a href="/book" className="mt-6 inline-block rounded-xl bg-[var(--rs-gold)] px-5 py-2 font-medium text-black">Book with Offer</a>
    </main>
  );
}

