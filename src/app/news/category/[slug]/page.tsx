type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  return { title: `${params.slug.replace(/-/g," ")} | News Category | Reserved Suites` };
}

export default function NewsCategory({ params }: Props) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold capitalize">{params.slug.replace(/-/g, " ")}</h1>
      {/* TODO: list posts by category */}
    </main>
  );
}

