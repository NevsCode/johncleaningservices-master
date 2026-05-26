import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Janitorial Cleaning Services",
  description:
    "Professional residential and commercial cleaning services in Rosebank, Cape Town, including deep cleaning, office care, and post-construction cleanup.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
