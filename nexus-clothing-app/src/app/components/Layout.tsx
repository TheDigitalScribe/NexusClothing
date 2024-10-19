import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto px-4 md:px-12">
      {children}
    </main>
  );
}
