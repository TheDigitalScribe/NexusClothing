import type { Metadata } from "next";
import { openSans } from './fonts/fonts'
import "./globals.css";
import { ThemeProvider } from './components/ThemeContext';
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Nexus Clothing",
  description: "E-commerce clothing website built with React, Next.js 14 and Typescript.",
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
