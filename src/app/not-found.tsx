export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-neutral-400">The page you’re looking for doesn’t exist.</p>
      <a href="/" className="mt-6 inline-block rounded-xl border border-neutral-700 px-4 py-2">Go Home</a>
    </main>
  );
}

