import Link from 'next/link';
export default function BlogPage() {
  return (
    <div>
      <h1>Blog Directory</h1>
      <p>Click a link below to test dynamic slugs:</p>
      <ul>
        <li><Link href="/blog/react-guide">React Complete Guide</Link></li>
        <li><Link href="/blog/nextjs-is-awesome">Next.js is Awesome</Link></li>
      </ul>
    </div>
  );
}