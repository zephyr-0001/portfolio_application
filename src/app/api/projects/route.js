import { getProjects } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
    const projects = await getProjects();
    return NextResponse.json(projects);
}
