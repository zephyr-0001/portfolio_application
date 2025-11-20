import { getProjectById, getProjects } from '@/lib/data';
import ArtifactView from '@/components/ArtifactView';
import Link from 'next/link';

export async function generateStaticParams() {
    const projects = getProjects();
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({ params }) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        return <div className="container">Project not found</div>;
    }

    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-xl)' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--accent)', marginBottom: 'var(--spacing-md)' }}>
                ← Back to Projects
            </Link>

            <header style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--white)', marginBottom: '1rem' }}>{project.title}</h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>{project.summary}</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.9rem',
                            color: 'var(--accent)',
                            fontFamily: 'monospace',
                            background: 'rgba(100, 255, 218, 0.1)',
                            padding: '4px 12px',
                            borderRadius: '4px'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            {project.artifacts.problemStatement && (
                <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h2 className="section-title">01. The Problem</h2>
                    <ArtifactView type="problemStatement" data={project.artifacts.problemStatement} />
                </section>
            )}

            {project.artifacts.personas && (
                <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h2 className="section-title">02. User Personas</h2>
                    <ArtifactView type="personas" data={project.artifacts.personas} />
                </section>
            )}

            {project.artifacts.matrix && (
                <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h2 className="section-title">03. Prioritization Matrix</h2>
                    <ArtifactView type="matrix" data={project.artifacts.matrix} />
                </section>
            )}

            {project.artifacts.backlog && (
                <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                    <h2 className="section-title">04. Product Backlog</h2>
                    <ArtifactView type="backlog" data={project.artifacts.backlog} />
                </section>
            )}
        </div>
    );
}
