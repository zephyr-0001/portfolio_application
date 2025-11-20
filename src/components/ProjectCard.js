import Link from 'next/link';

export default function ProjectCard({ project }) {
    return (
        <Link href={`/project/${project.id}`} style={{ display: 'block' }}>
            <div className="glass-panel" style={{
                height: '100%',
                transition: 'transform 0.2s ease',
                cursor: 'pointer'
            }}>
                <h3 style={{
                    color: 'var(--white)',
                    marginBottom: '1rem',
                    fontSize: '1.25rem'
                }}>
                    {project.title}
                </h3>
                <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    fontSize: '0.9rem'
                }}>
                    {project.summary}
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.tags && project.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.75rem',
                            color: 'var(--accent)',
                            fontFamily: 'monospace',
                            background: 'rgba(100, 255, 218, 0.1)',
                            padding: '4px 8px',
                            borderRadius: '4px'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
