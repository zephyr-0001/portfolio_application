import { getPosts } from '@/lib/data';
import Link from 'next/link';

export default function BlogPage() {
    const posts = getPosts();

    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-xl)' }}>
            <h1 style={{ color: 'var(--white)', marginBottom: 'var(--spacing-md)' }}>Blog</h1>
            <div style={{ display: 'grid', gap: '2rem' }}>
                {posts.map(post => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                        <div className="glass-panel" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
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
