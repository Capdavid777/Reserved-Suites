export const metadata = { title: "Contact Us | Reserved Suites Illovo" };

export default function Contact() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-neutral-300">
          <p>Phone: <a href="tel:+27..." className="underline">+27 ...</a></p>
          <p>WhatsApp: <a href="https://wa.me/27..." className="underline">Chat with us</a></p>
          <p>Email: <a href="mailto:info@reservedsuites.com" className="underline">info@reservedsuites.com</a></p>
          <p>Address: Illovo, Sandton, South Africa</p>
        </div>
        <form className="rounded-2xl border border-neutral-800 p-5">
          <label className="block text-sm text-neutral-400">Name</label>
          <input className="mb-3 mt-1 w-full rounded-xl bg-neutral-900 p-2 outline-none ring-1 ring-neutral-800" />
          <label className="block text-sm text-neutral-400">Email</label>
          <input className="mb-3 mt-1 w-full rounded-xl bg-neutral-900 p-2 outline-none ring-1 ring-neutral-800" />
          <label className="block text-sm text-neutral-400">Message</label>
          <textarea rows={5} className="mt-1 w-full rounded-xl bg-neutral-900 p-2 outline-none ring-1 ring-neutral-800" />
          <button className="mt-4 rounded-xl bg-[var(--rs-gold)] px-5 py-2 font-medium text-black">Send</button>
        </form>
      </div>
    </main>
  );
}

