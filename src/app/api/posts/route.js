import { getPosts, savePost } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
    const posts = getPosts();
    return NextResponse.json(posts);
}

export async function POST(request) {
    const post = await request.json();

    if (!post.id || !post.title || !post.content) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    savePost(post);
    return NextResponse.json({ success: true, post });
}
