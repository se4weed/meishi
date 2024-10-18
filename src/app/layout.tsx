import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meishi',
  description: 'Meishi about se4weed',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
