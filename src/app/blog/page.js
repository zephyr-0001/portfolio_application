import { getPosts } from '@/lib/data';
import Link from 'next/link';

export default function BlogPage() {
    const posts = getPosts();

    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-xl)' }}>
            <h1 className="animate-slide-up" style={{ color: 'var(--white)', marginBottom: 'var(--spacing-md)' }}>Blog</h1>
            <div className="animate-slide-up delay-100" style={{ display: 'grid', gap: '2rem' }}>
                {posts.map(post => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                        <div className="glass-panel hover-card" style={{ cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)' }}>
                            <h2 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>{post.title}</h2>
                            <p style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '1rem' }}>{post.date}</p>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                {post.content.length > 150 ? post.content.substring(0, 150) + '...' : post.content}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
