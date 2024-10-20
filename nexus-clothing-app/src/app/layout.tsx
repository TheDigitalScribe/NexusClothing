import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from './components/ThemeContext';
import Header from "./components/Header";

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

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
  title: "Nexus Clothing",
  description: "E-commerce clothing website built with React, Next.js 13 and Typescript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html >
  );
}
