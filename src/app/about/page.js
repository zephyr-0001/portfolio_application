import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-lg)', paddingBottom: 'var(--spacing-xl)' }}>
            <div className="glass-panel animate-scale-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1 className="animate-slide-up" style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Hi, I'm Adithya GS 👋</h1>
                    <h2 className="animate-slide-up delay-100" style={{ color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 'normal' }}>Technical Business Analyst & Product Enthusiast</h2>
                    <p className="animate-slide-up delay-200" style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Bengaluru, India 🇮🇳</p>
                </div>

                <div className="animate-slide-up delay-300" style={{ marginBottom: '2rem' }}>
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

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--white)', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Experience</h3>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <h4 style={{ color: 'var(--white)' }}>Engineer I, Internal Systems</h4>
                            <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>Jul 2024 - Present</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>StoneX Group Inc.</p>
                        <p style={{ color: 'var(--text-primary)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                            Supporting Treasury Management Systems, leading requirement gathering, and driving UI/UX redesigns.
                        </p>
                    </div>
                </div>

                <div>
                    <h3 style={{ color: 'var(--white)', marginBottom: '1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Beyond Work</h3>
                    <p style={{ color: 'var(--text-primary)', lineHeight: 1.6 }}>
                        When I'm not building products, you'll find me locked into an intense gaming session 🎮 or binge-watching the latest thriller series.
                        There's something about unraveling a good mystery or pulling off a perfect strategy that just hits different.
                        Always down for game recommendations or thriller suggestions! 🍿
                    </p>
                </div>

                {/* Connect Section */}
                <div style={{
                    marginTop: '3rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--glass-border)',
                    textAlign: 'center'
                }}>
                    <h3 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Let's Connect</h3>
                    <a
                        href="https://www.linkedin.com/in/adithya-gs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}
