import Link from 'next/link';

export default function ServicesLayout({ children }) {
  return (
    <div style={{ display: 'flex', gap: '30px', background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      {/* Sidebar visible only in services */}
      <aside style={{ width: '250px', borderRight: '1px solid #eee', paddingRight: '20px' }}>
        <h3>Our Services</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}><Link href="/services/web-development">🌐 Web Development</Link></li>
          <li style={{ margin: '10px 0' }}><Link href="/services/mobile-development">📱 Mobile Development</Link></li>
          <li style={{ margin: '10px 0' }}><Link href="/services/ui-ux">🎨 UI/UX Design</Link></li>
        </ul>
      </aside>
      
      {/* Services Sub-page Content */}
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}