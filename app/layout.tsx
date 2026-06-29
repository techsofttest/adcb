import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADCB Consultancy | Premium Educational Admission & Career Counselling",
  description:
    "ADCB Consultancy provides elite educational admission assistance and career counselling for MBBS, MD/MS, MDS, MBA, and MTTM programs. Expert guidance for international pathways including UAE, UK, Australia, and Canada.",
  keywords:
    "ADCB, education consultancy, MBBS admission, MDS, MD MS, MBA, MTTM, dental speciality, study abroad, career counselling, UAE dental license",
  openGraph: {
    title: "ADCB Consultancy | Premium Educational Admission & Career Counselling",
    description:
      "Expert guidance for MBBS, MDS, MD/MS, MBA, and MTTM admissions. International pathway specialists.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
