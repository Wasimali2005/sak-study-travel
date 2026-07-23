import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAK Study & Travel – Your Global Education Partner",
  description:
    "Expert guidance for international university admissions, student visas, and scholarships. SAK Study & Travel helps you study at top institutions worldwide.",
  keywords: [
    "study abroad",
    "student visa",
    "university admission",
    "scholarships",
    "international education",
    "SAK Study Travel",
  ],
  authors: [{ name: "SAK Study & Travel" }],
  openGraph: {
    title: "SAK Study & Travel – Your Global Education Partner",
    description:
      "Expert guidance for international university admissions, student visas, and scholarships.",
    type: "website",
    locale: "en_US",
    siteName: "SAK Study & Travel",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAK Study & Travel – Your Global Education Partner",
    description:
      "Expert guidance for international university admissions, student visas, and scholarships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
