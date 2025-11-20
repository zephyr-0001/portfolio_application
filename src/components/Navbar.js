'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path) => {
        if (path === '/work') {
            return pathname === '/work' ? 'active' : '';
        }
        return pathname === path ? 'active' : '';
    };

    return (
        <nav style={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'rgba(10, 25, 47, 0.6)',
            backdropFilter: 'blur(16px) saturate(180%)',
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
                    Adithya's Portfolio
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                    <Link href="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                    <Link href="/work" className={`nav-link ${isActive('/work')}`}>Work</Link>
                    <Link href="/blog" className={`nav-link ${isActive('/blog')}`}>Blog</Link>
                </div>
            </div>
        </nav>
    );
}
