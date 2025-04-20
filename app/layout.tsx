import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "https://ammaarkhan.netlify.app/api/og?title=HelloWorld",
        width: 1200,
        height: 628,
        alt: "Hello",
      },
    ],
  },
  title: "Ammaar's Portfolio",
  description: "Coded using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Instrument+Serif:ital@0;1&display=swap" 
        rel="stylesheet"
        />

      <meta property="og:title" content="Ammaar's Portfolio" />
      <meta property="og:description" content="Coded using NextJS" />
      <meta property="og:image" content="https://ammaarkhan.netlify.app/images/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      </head>
      <body className={fontSans.className}>{children}
        
      </body>
    </html>
  );
}
