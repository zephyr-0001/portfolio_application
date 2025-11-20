import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
    const { password } = await request.json();

    // Hardcoded password for demo purposes
    if (password === 'admin123') {
        const cookieStore = await cookies();
        cookieStore.set('auth_token', 'valid_token', {
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24 // 1 day
        });
        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
}

export async function DELETE() {
    const cookieStore = await cookies();
    cookieStore.delete('auth_token');
    return NextResponse.json({ success: true });
}
