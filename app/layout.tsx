import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Malvika Sawant | AI Engineer & ML Specialist",
  description: "Portfolio of Malvika Sawant - MS in Computer Science at Columbia University. Former AI Engineer at Deriv. Specializing in LLMs, RAG, Generative AI, and production ML systems.",
  keywords: ["AI Engineer", "Machine Learning", "LLMs", "RAG", "Columbia University", "Deriv", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased w-full min-w-0 bg-[#0a0a0f]`}
      >
        {children}
      </body>
    </html>
  );
}