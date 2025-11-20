import { getPostById, getPosts } from '@/lib/data';
import Link from 'next/link';

export async function generateStaticParams() {
    const posts = getPosts();
    return posts.map((post) => ({
        id: post.id,
    }));
}

export default async function BlogPostPage({ params }) {
    const { id } = await params;
    const post = getPostById(id);

    if (!post) {
        return <div className="container">Post not found</div>;
    }

    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-xl)', maxWidth: '800px' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--accent)', marginBottom: 'var(--spacing-md)' }}>
                ← Back to Blog
            </Link>

            <article>
                <header style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '0.5rem' }}>{post.title}</h1>
                    <time style={{ color: 'var(--accent)', fontFamily: 'monospace' }}>{post.date}</time>
                </header>

                <div style={{ color: 'var(--text-primary)', lineHeight: '1.8', fontSize: '1.1rem', whiteSpace: 'pre-wrap' }}>
                    {post.content}
                </div>
            </article>
        </div>
    );
}
