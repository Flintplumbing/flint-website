import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://flintplumbing.co.uk";
const siteDescription =
  "Plumbing maintenance, boiler installs, boiler servicing and bathroom installs for households, landlords, letting agents and subcontracting work across Newcastle and the North East.";
const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Plumber"],
  name: "Flint Plumbing",
  url: siteUrl,
  telephone: "+447932423309",
  email: "flint.plumbing.heating@gmail.com",
  description: siteDescription,
  priceRange: "££",
  areaServed: [
    "Newcastle",
    "Cramlington",
    "Northumberland",
    "North Tyneside",
    "Gateshead",
    "North East England",
  ],
  knowsAbout: [
    "Plumbing maintenance",
    "Boiler installs",
    "Boiler servicing",
    "Bathroom installs",
    "Landlord plumbing work",
    "Letting agent maintenance",
    "Subcontracting plumbing work",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing maintenance" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boiler installs" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Boiler servicing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom installs" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landlord and letting agent plumbing work" } },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "FLINT. Plumbing & Heating | Plumber in Newcastle, Cramlington & Northumberland",
    template: "%s | FLINT. Plumbing & Heating",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "plumber Newcastle",
    "plumber Cramlington",
    "plumber Northumberland",
    "plumbing and heating North East",
    "plumbing maintenance Newcastle",
    "boiler installation Newcastle",
    "boiler servicing Newcastle",
    "boiler repair Newcastle",
    "bathroom installs Newcastle",
    "bathroom installs North East",
    "landlord plumbing services",
    "letting agent plumbing maintenance",
    "plumbing subcontractor North East",
    "bathroom fitter Newcastle",
    "bathroom installation North East",
    "heating engineer Newcastle",
    "gas engineer Newcastle",
    "FLINT Plumbing and Heating",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "FLINT. Plumbing & Heating | Newcastle, Cramlington & Northumberland",
    description: siteDescription,
    url: siteUrl,
    siteName: "FLINT. Plumbing & Heating",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
