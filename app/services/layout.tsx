import type { Metadata } from "next";

const description =
  "Plumbing maintenance, boiler installs, boiler servicing, bathroom installs and repair work for households, landlords, letting agents and subcontracting clients.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Plumbing, Heating & Bathroom Services",
    description,
    url: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
