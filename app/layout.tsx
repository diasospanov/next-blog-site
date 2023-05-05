import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Blog Site',
  description: 'Short Blogs on various topics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <div>
            <Link href="/">Home</Link>
          </div>
        </header>
        {children}
        <footer>Di & Co. All rights reserved.</footer>
      </body>
    </html>
  );
}
