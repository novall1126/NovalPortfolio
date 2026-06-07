import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhamad Noval. | Portfolio',
  description: 'Portofolio By Muhamad Noval',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-white antialiased selection:bg-accent selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
