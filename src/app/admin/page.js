'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const [projects, setProjects] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [posts, setPosts] = useState([]);
    const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'blog'
    const [currentPost, setCurrentPost] = useState(null);
    const router = useRouter();

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
        fetch('/api/posts').then(res => res.json()).then(data => setPosts(data));
    }, []);

    const handleLogout = async () => {
        await fetch('/api/auth', { method: 'DELETE' });
        router.push('/admin/login');
    };

    const handleSaveProject = async (e) => {
        e.preventDefault();
        // In a real app, we'd validate and maybe use a form library
        // For this MVP, we'll just assume the JSON is valid if provided directly or built via a form
        // To keep it simple for the user, we will just have a text area for the JSON content for now
        // or a simple form for basic details.

        // Let's do a simple JSON editor for maximum flexibility as requested "automatically done when I add it"
        try {
            const projectData = JSON.parse(currentProject);
            const res = await fetch('/api/projects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(projectData),
            });

            if (res.ok) {
                setIsEditing(false);
                setCurrentProject(null);
                // Refresh list
                const updatedProjects = await fetch('/api/projects').then(r => r.json());
                setProjects(updatedProjects);
            }
        } catch (err) {
            alert('Invalid JSON');
        }
    };

    const handleSavePost = async (e) => {
        e.preventDefault();
        try {
            const postData = JSON.parse(currentPost);
            const res = await fetch('/api/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData),
            });

            if (res.ok) {
                setIsEditing(false);
                setCurrentPost(null);
                const updatedPosts = await fetch('/api/posts').then(r => r.json());
                setPosts(updatedPosts);
            }
        } catch (err) {
            alert('Invalid JSON');
        }
    };

    return (
        <div className="container" style={{ paddingTop: 'var(--spacing-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
                <h1 style={{ color: 'var(--white)' }}>Admin Dashboard</h1>
                <button onClick={handleLogout} className="btn">Logout</button>
            </div>

            <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)' }}>
                <button
                    onClick={() => { setActiveTab('projects'); setIsEditing(false); }}
                    style={{
                        padding: '1rem 2rem',
                        background: 'transparent',
                        border: 'none',
                        color: activeTab === 'projects' ? 'var(--accent)' : 'var(--text-secondary)',
                        borderBottom: activeTab === 'projects' ? '2px solid var(--accent)' : 'none',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}
                >
                    Projects
                </button>
                <button
                    onClick={() => { setActiveTab('blog'); setIsEditing(false); }}
                    style={{
                        padding: '1rem 2rem',
                        background: 'transparent',
                        border: 'none',
                        color: activeTab === 'blog' ? 'var(--accent)' : 'var(--text-secondary)',
                        borderBottom: activeTab === 'blog' ? '2px solid var(--accent)' : 'none',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}
                >
                    Blog
                </button>
            </div>

            {!isEditing ? (
                <div>
                    <div style={{ marginBottom: '2rem' }}>
                        <button
                            onClick={() => {
                                if (activeTab === 'projects') {
                                    setCurrentProject(JSON.stringify({
                                        id: "new-project",
                                        title: "New Project",
                                        summary: "Project Summary",
                                        tags: ["Tag1"],
                                        artifacts: {}
                                    }, null, 2));
                                } else {
                                    setCurrentPost(JSON.stringify({
                                        id: "new-post",
                                        title: "New Blog Post",
                                        date: new Date().toISOString().split('T')[0],
                                        content: "Write your content here..."
                                    }, null, 2));
                                }
                                setIsEditing(true);
                            }}
                            className="btn btn-primary"
                        >
                            + Add New {activeTab === 'projects' ? 'Project' : 'Post'}
                        </button>
                    </div>

                    <div className="glass-panel">
                        <h2 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Existing {activeTab === 'projects' ? 'Projects' : 'Posts'}</h2>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {activeTab === 'projects' ? projects.map(p => (
                                <div key={p.id} style={{
                                    padding: '1rem',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{ color: 'var(--text-primary)' }}>{p.title}</span>
                                    <button
                                        onClick={() => {
                                            setCurrentProject(JSON.stringify(p, null, 2));
                                            setIsEditing(true);
                                        }}
                                        className="btn"
                                        style={{ fontSize: '0.8rem', padding: '8px 16px' }}
                                    >
                                        Edit
                                    </button>
                                </div>
                            )) : posts.map(p => (
                                <div key={p.id} style={{
                                    padding: '1rem',
                                    border: '1px solid var(--glass-border)',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <span style={{ color: 'var(--text-primary)', display: 'block' }}>{p.title}</span>
                                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{p.date}</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setCurrentPost(JSON.stringify(p, null, 2));
                                            setIsEditing(true);
                                        }}
                                        className="btn"
                                        style={{ fontSize: '0.8rem', padding: '8px 16px' }}
                                    >
                                        Edit
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="glass-panel">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <h2 style={{ color: 'var(--white)' }}>Edit {activeTab === 'projects' ? 'Project' : 'Post'} (JSON)</h2>
                        <button onClick={() => setIsEditing(false)} className="btn">Cancel</button>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        Paste your JSON here. Ensure it follows the structure.
                    </p>
                    <form onSubmit={activeTab === 'projects' ? handleSaveProject : handleSavePost}>
                        <textarea
                            value={activeTab === 'projects' ? currentProject : currentPost}
                            onChange={(e) => activeTab === 'projects' ? setCurrentProject(e.target.value) : setCurrentPost(e.target.value)}
                            style={{
                                width: '100%',
                                height: '500px',
                                background: 'rgba(10, 25, 47, 0.5)',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '4px',
                                padding: '1rem',
                                fontFamily: 'monospace',
                                marginBottom: '1rem'
                            }}
                        />
                        <button type="submit" className="btn btn-primary">Save {activeTab === 'projects' ? 'Project' : 'Post'}</button>
                    </form>
                </div>
            )}
        </div>
    );
}
