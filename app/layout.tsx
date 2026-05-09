import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "FLINT. Plumbing & Heating | Plumber in Newcastle, Cramlington & Northumberland",
    template: "%s | FLINT. Plumbing & Heating",
  },
  description:
    "Modern plumbing, heating and bathroom installation services across Newcastle, Cramlington, Northumberland and the North East. Boiler installs, plumbing repairs, bathroom fitting and heating work.",
  keywords: [
    "plumber Newcastle",
    "plumber Cramlington",
    "plumber Northumberland",
    "plumbing and heating North East",
    "boiler installation Newcastle",
    "boiler repair Newcastle",
    "bathroom fitter Newcastle",
    "bathroom installation North East",
    "heating engineer Newcastle",
    "gas engineer Newcastle",
    "FLINT Plumbing and Heating",
  ],
  openGraph: {
    title:
      "FLINT. Plumbing & Heating | Newcastle, Cramlington & Northumberland",
    description:
      "Plumbing, heating and bathroom installations across the North East.",
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
      <body>{children}</body>
    </html>
  );
}