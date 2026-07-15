import type { Metadata } from "next";

const description =
  "Learn about FLINT Plumbing & Heating, a local plumbing business serving homeowners, landlords, letting agents and local property contacts across the North East.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About FLINT. Plumbing & Heating",
    description,
    url: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
