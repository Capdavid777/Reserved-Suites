import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reserved Suites Illovo | Aparthotel in Sandton",
  description: "Corporate luxury aparthotel in Illovo, Sandton. Suites & apartments with hotel comforts. Book direct for best rates.",
  metadataBase: new URL("https://www.reservedsuites.com"),
  openGraph: {
    title: "Reserved Suites Illovo | Aparthotel in Sandton",
    type: "website",
    url: "https://www.reservedsuites.com",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-neutral-950 text-white">
      <body className="min-h-screen antialiased">
        {/* TODO: import your Navbar */}
        {children}
        {/* TODO: import your Footer */}
      </body>
    </html>
  );
}

