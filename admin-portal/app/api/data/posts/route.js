import { savePost, getPosts } from '@/lib/data';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function GET() {
    const posts = await getPosts();
    return NextResponse.json(posts);
}

export async function POST(request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const post = await request.json();

    if (!post.id || !post.title || !post.content) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await savePost(post);
    return NextResponse.json({ success: true, post });
}
