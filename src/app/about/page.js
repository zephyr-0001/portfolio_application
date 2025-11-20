import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-xl)' }}>
            <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Hi, I'm Adithya GS 👋</h1>
                    <h2 style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 'normal' }}>Technical Business Analyst & Product Enthusiast</h2>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Bengaluru, India 🇮🇳</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--white)', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>The Short Story</h3>
                    <p style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                        I'm a Certified Scrum Product Owner (CSPO) currently working at StoneX Group Inc. I love bridging the gap between complex technical systems and human needs. My day-to-day involves translating "business speak" into clear technical requirements, redesigning internal tools to be actually usable, and making sure we're building the <i>right</i> thing.
                    </p>
                    <p style={{ color: 'var(--text-primary)' }}>
                        I graduated with a B.Tech in CS & Engineering in 2024, so I bring a strong technical foundation to my product roles. I speak fluent Engineering, Design (Figma), and Business.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                    <div>
                        <h3 style={{ color: 'var(--white)', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>What I Do</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>🚀 Product Strategy & Vision</li>
                            <li style={{ marginBottom: '0.5rem' }}>🎨 UI/UX Redesigns (Figma)</li>
                            <li style={{ marginBottom: '0.5rem' }}>📝 Requirement Gathering</li>
                            <li style={{ marginBottom: '0.5rem' }}>🔄 Agile & Scrum (JIRA)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--white)', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Languages</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>🗣️ English</li>
                            <li style={{ marginBottom: '0.5rem' }}>🗣️ Kannada</li>
                            <li style={{ marginBottom: '0.5rem' }}>🗣️ Hindi</li>
                            <li style={{ marginBottom: '0.5rem' }}>🗣️ Telugu</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 style={{ color: 'var(--white)', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Experience</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <h4 style={{ color: 'var(--white)' }}>Engineer I, Internal Systems</h4>
                            <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>Jul 2024 - Present</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>StoneX Group Inc.</p>
                        <p style={{ color: 'var(--text-primary)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                            Supporting Treasury Management Systems, leading requirement gathering, and driving UI/UX redesigns.
                        </p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <h4 style={{ color: 'var(--white)' }}>Intern</h4>
                            <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>Jan 2024 - Jun 2024</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>StoneX Group Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
