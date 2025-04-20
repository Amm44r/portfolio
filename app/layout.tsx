import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Ammaar's Portfolio",
  description: "Coded using NextJS",
  openGraph: {
    title: "Ammaar's Portfolio",
    description: "Coded using NextJS",
    images: [
      {
        url: "https://ammaarkhan.netlify.app/images/og-image-preview.png", // make sure this URL works
        width: 1200,
        height: 628,
        alt: "Ammaar's Portfolio Image",
      },
    ],
  },
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
      </head>
      <body className={fontSans.className}>{children}
        
      </body>
    </html>
  );
}