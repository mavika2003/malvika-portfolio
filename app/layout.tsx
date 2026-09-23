import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Malvika Sawant — AI Engineer & Researcher",
  description: "MS Computer Science at Columbia University. Building agentic AI systems and security platforms — previously at Deriv, handling 100K+ requests/day.",
  keywords: ["AI Engineer", "Machine Learning", "LLM", "Agentic Systems", "Columbia University", "Deriv"],
  authors: [{ name: "Malvika Sawant" }],
  openGraph: {
    title: "Malvika Sawant — AI Engineer & Researcher",
    description: "Building agentic AI systems that actually ship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}