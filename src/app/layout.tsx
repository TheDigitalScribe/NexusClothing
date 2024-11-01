import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Nexus Clothing",
  description: "E-commerce clothing website built with React, Next.js 14 and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antiaiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html >
  );
}
