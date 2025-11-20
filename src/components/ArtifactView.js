export default function ArtifactView({ type, data }) {
    if (!data) return null;

    const renderProblemStatement = (data) => (
        <div className="glass-panel">
            <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Problem Statement</h3>
            <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Current State</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{data.currentState}</p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>The Problem</h4>
                <p style={{ color: 'var(--text-secondary)' }}>{data.problem}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                    <h4 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Business Impact</h4>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                        {data.businessImpact.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>• {item}</li>)}
                    </ul>
                </div>
                <div>
                    <h4 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Success Metrics</h4>
                    <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
                        {data.successMetrics.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>• {item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );

    const renderPersonas = (data) => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {data.map((persona, i) => (
                <div key={i} className="glass-panel">
                    <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                        <h3 style={{ color: 'var(--white)' }}>{persona.name}</h3>
                        <p style={{ color: 'var(--accent)', fontFamily: 'monospace' }}>{persona.role}</p>
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>GOALS</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            {persona.goals.map((g, j) => <li key={j} style={{ marginBottom: '0.25rem' }}>• {g}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>FRUSTRATIONS</h4>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            {persona.frustrations.map((f, j) => <li key={j} style={{ marginBottom: '0.25rem' }}>• {f}</li>)}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderMatrix = (data) => (
        <div className="glass-panel" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                        <th style={{ padding: '1rem', color: 'var(--accent)' }}>Feature</th>
                        <th style={{ padding: '1rem', color: 'var(--accent)' }}>Value</th>
                        <th style={{ padding: '1rem', color: 'var(--accent)' }}>Effort</th>
                        <th style={{ padding: '1rem', color: 'var(--accent)' }}>Priority</th>
                        <th style={{ padding: '1rem', color: 'var(--accent)' }}>Reasoning</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '1rem', color: 'var(--white)', fontWeight: 'bold' }}>{row.feature}</td>
                            <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{row.value}</td>
                            <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{row.effort}</td>
                            <td style={{ padding: '1rem' }}>
                                <span style={{
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    background: row.priority === 'Must Have' ? 'rgba(100, 255, 218, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                                    color: row.priority === 'Must Have' ? 'var(--accent)' : 'var(--text-secondary)'
                                }}>
                                    {row.priority}
                                </span>
                            </td>
                            <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{row.reasoning}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    const renderBacklog = (data) => (
        <div className="glass-panel" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                        <th style={{ padding: '1rem', color: 'var(--accent)' }}>ID</th>
                        <th style={{ padding: '1rem', color: 'var(--accent)' }}>User Story</th>
                        <th style={{ padding: '1rem', color: 'var(--accent)' }}>Acceptance Criteria</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <td style={{ padding: '1rem', color: 'var(--white)', fontFamily: 'monospace' }}>{item.id}</td>
                            <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{item.story}</td>
                            <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>
                                <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                                    {item.acceptanceCriteria.map((ac, j) => (
                                        <li key={j} style={{ marginBottom: '0.25rem' }}>{ac}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    switch (type) {
        case 'problemStatement': return renderProblemStatement(data);
        case 'personas': return renderPersonas(data);
        case 'matrix': return renderMatrix(data);
        case 'backlog': return renderBacklog(data);
        default: return null;
    }
}
