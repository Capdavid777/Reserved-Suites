import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.reservedsuites.com";
  const paths = [
    "", "suites", "suites/studio", "suites/one-bedroom", "suites/two-bedroom", "suites/three-bedroom",
    "amenities", "amenities/pool-rooftop", "amenities/fitness", "amenities/cafe", "amenities/laundry",
    "corporate", "corporate/long-stay", "corporate/relocation", "corporate/student", "corporate/conference-venue", "corporate/serviced-offices",
    "offers", "about", "gallery", "location", "contact", "book", "news", "faqs",
    "policies", "policies/terms", "policies/privacy", "policies/cancellation", "investors"
  ];
  return paths.map((p) => ({
    url: `${base}/${p}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}

