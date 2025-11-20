import { getProjects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const projects = getProjects();

  return (
    <div className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>
      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h1 className="animate-slide-up" style={{
          fontSize: 'clamp(40px, 8vw, 80px)',
          fontWeight: 'bold',
          color: 'var(--white)',
          lineHeight: 1.1,
          marginBottom: 'var(--spacing-md)'
        }}>
          Building <span style={{ color: 'var(--accent)' }}>Enterprise UX</span><br />
          that works.
        </h1>
        <p className="animate-slide-up delay-100" style={{
          fontSize: '1.25rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          marginBottom: 'var(--spacing-lg)'
        }}>
          I'm a Business Analyst and Product Owner specializing in transforming complex internal tools into intuitive, efficient experiences.
        </p>
        <div className="animate-slide-up delay-200">
          <a href="#projects" className="btn btn-primary">View My Work</a>
        </div>
      </section>

      <section id="projects" className="animate-slide-up delay-300">
        <h2 className="section-title">Selected Projects</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 'var(--spacing-md)'
        }}>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
