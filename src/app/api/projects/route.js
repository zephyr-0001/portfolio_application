import { getProjects, saveProject } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function GET() {
    const projects = getProjects();
    return NextResponse.json(projects);
}

export async function POST(request) {
    const project = await request.json();

    // Simple validation
    if (!project.id || !project.title) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    saveProject(project);
    return NextResponse.json({ success: true, project });
}
