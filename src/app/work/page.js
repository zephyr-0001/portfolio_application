import Link from 'next/link';
import { getProjects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default async function WorkPage() {
    const projects = await getProjects();

    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-xl)' }}>
            <section className="animate-slide-up">
                <h1 className="section-title">My Work</h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-lg)',
                    maxWidth: '700px'
                }}>
                    Here's a collection of projects where I've transformed complex business requirements into user-friendly solutions.
                    Each one showcases my approach to Enterprise UX and product management.
                </p>
            </section>

            <section className="animate-slide-up delay-100">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 'var(--spacing-md)'
                }}>
                    {projects.map((project, index) => (
                        <div key={project.id} className={`animate-scale-in delay-${Math.min((index + 2) * 100, 500)}`}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
