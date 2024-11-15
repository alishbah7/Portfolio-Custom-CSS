import type { Metadata } from "next";
import Script from 'next/script';
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alishbah",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*---=== BOIXONS ===---*/}
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

        {/*---=== REVEAL ON SCROLL ===---*/}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/*---=== REVEAL ON SCROLL ===---*/}
        <Script src="https://unpkg.com/aos@next/dist/aos.js" />
        <Script>
            AOS.init();
        </Script>
      </body>
    </html>
  );
}
