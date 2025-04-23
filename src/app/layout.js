import './globals.css';
import { Limelight } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const limelight = Limelight({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={limelight.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}