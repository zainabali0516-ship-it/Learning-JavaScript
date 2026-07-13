import Link from 'next/link';

export const metadata = {
  title: 'Next.js Routing Assignment',
  description: 'Built with Next.js App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, background: '#f4f6f9' }}>
        {/* Global Header */}
        <header style={{ background: '#0070f3', padding: '1rem', color: 'white', textAlign: 'center' }}>
          <h2>My Next.js App</h2>
          <nav style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '10px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            <Link href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
            <Link href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link>
            <Link href="/students" style={{ color: 'white', textDecoration: 'none' }}>Students</Link>
            <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main style={{ padding: '2rem', minHeight: '70vh', maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </main>

        {/* Global Footer */}
        <footer style={{ background: '#333', color: 'white', textAlign: 'center', padding: '1rem', marginTop: '2rem' }}>
          <p>© 2026 Student Assignment. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}