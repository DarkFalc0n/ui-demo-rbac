import type { Metadata } from 'next';
import './globals.css';
// import Navbar from '@/components/molecules/navbar';

export const metadata: Metadata = {
  title: 'RBAC Demo',
  description: 'Role-based access control demo'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative mx-4 my-4 flex h-screen flex-col overflow-hidden bg-zinc-200 pb-4 antialiased`}
      >
        <main className="flex-grow overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
