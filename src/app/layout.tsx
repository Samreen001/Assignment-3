// src/app/layout.tsx
import './globals.css'; // Global styles
import Header from './Components/Header';
import Footer from './Components/Footer';

export const metadata = {
  title: 'My Website',
  description: 'A simple website built with Next.js',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
