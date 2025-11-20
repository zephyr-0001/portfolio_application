'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
        });

        if (res.ok) {
            router.push('/admin');
        } else {
            setError('Invalid password');
        }
    };

    return (
        <div className="container" style={{
            height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="glass-panel" style={{ width: '100%', maxWidth: '400px' }}>
                <h1 style={{ color: 'var(--white)', marginBottom: '2rem', textAlign: 'center' }}>Admin Login</h1>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            style={{
                                width: '100%',
                                padding: '12px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '4px',
                                color: 'var(--white)',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                    {error && <p style={{ color: '#ff6b6b', marginBottom: '1rem' }}>{error}</p>}
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
