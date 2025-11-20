import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            borderBottom: '1px solid var(--glass-border)',
            background: 'rgba(10, 25, 47, 0.85)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '80px'
            }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                    PO<span style={{ color: 'var(--text-primary)' }}>Portfolio</span>
                </Link>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link href="/" className="nav-link">Work</Link>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/blog" className="nav-link">Blog</Link>
                    <Link href="/admin" className="btn">Admin</Link>
                </div>
            </div>
        </nav>
    );
}
