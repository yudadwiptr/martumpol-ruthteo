import type { Metadata } from "next";
import { Ovo } from "@next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { config } from "@/lib/config";


const legan = localFont({
  src: "./fonts/Legan.woff",
  variable: "--font-legan",
  weight: "100 900",
});


const thesignature = localFont({
  src: "./fonts/Thesignature.ttf",
  variable: "--font-thesignature",
  weight: "100 900",
});


const wonder = localFont({
  src: "./fonts/Wonder.woff",
  variable: "--font-wonder",
  weight: "100 900",
});

const ovo = Ovo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ovo",
});


export const metadata: Metadata = {
  title: `The Martumpol of ${config.coupleNames}`,
  description: `Di dalam nama Tuhan Yesus Kristus dengan segala kerendahan hati, kami mengundang Anda untuk hadir di salah satu hari bahagia kami. Bergabunglah dalam acara Martupol kami, dimana cinta kami akan disatukan dan diberkati oleh Tuhan Yesus Kristus.`,
  icons: {
    icon: 'https://martumpol-bellateo.vercel.app/r&t.svg',
  },
  openGraph: {
    title: `The Martumpol of ${config.coupleNames}`,
    description: `Di dalam nama Tuhan Yesus Kristus dengan segala kerendahan hati, kami mengundang Anda untuk hadir di salah satu hari bahagia kami. Bergabunglah dalam acara Martupol kami, dimana cinta kami akan disatukan dan diberkati oleh Tuhan Yesus Kristus.`,
    images: [
      {
        url: 'https://martumpol-bellateo.vercel.app/metafoto.jpg',
        width: 1200,
        height: 630,
        alt: 'The Martumpol of ' + config.coupleNames,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `The Martumpol of ${config.coupleNames}`,
    description: `Di dalam nama Tuhan Yesus Kristus dengan segala kerendahan hati, kami mengundang Anda untuk hadir di salah satu hari bahagia kami. Bergabunglah dalam acara Martupol kami, dimana cinta kami akan disatukan dan diberkati oleh Tuhan Yesus Kristus.`,
    images: ['https://martumpol-bellateo.vercel.app/metafoto.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#0a0a0a]  ${ovo.variable} ${thesignature.variable} ${wonder.variable} ${legan.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
