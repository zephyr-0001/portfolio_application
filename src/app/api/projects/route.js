import { getProjects, saveProject } from '@/lib/data';
import { NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
    const projects = getProjects();
    return NextResponse.json(projects);
}

export async function POST(request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const project = await request.json();

    // Simple validation
    if (!project.id || !project.title) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    saveProject(project);
    return NextResponse.json({ success: true, project });
}
