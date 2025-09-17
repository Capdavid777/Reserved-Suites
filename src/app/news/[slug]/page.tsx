import type { Metadata } from "next";
type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug.replace(/-/g, " ")} | News | Reserved Suites`,
    description: "Article",
  };
}

export default function Post({ params }: Props) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <article className="prose prose-invert max-w-none">
        <h1 className="mb-2 text-3xl font-semibold capitalize">{params.slug.replace(/-/g, " ")}</h1>
        <p className="text-sm text-neutral-400">Published • 5 min read</p>
        <div className="mt-6 space-y-4">
          <p>Post content goes here.</p>
        </div>
      </article>
    </main>
  );
}

