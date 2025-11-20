'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('projects');
  const [jsonInput, setJsonInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (session) {
      fetchData();
    }
  }, [session]);

  const fetchData = async () => {
    const projectsRes = await fetch('/api/data/projects');
    const postsRes = await fetch('/api/data/posts');
    setProjects(await projectsRes.json());
    setPosts(await postsRes.json());
  };

  const handleSave = async () => {
    try {
      const data = JSON.parse(jsonInput);
      const endpoint = activeTab === 'projects' ? '/api/data/projects' : '/api/data/posts';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setJsonInput('');
        setIsEditing(false);
        fetchData();
      } else {
        alert('Failed to save');
      }
    } catch (err) {
      alert('Invalid JSON: ' + err.message);
    }
  };

  if (status === 'loading') {
    return <div className="p-8">Loading...</div>;
  }

  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <h1 className="text-2xl font-bold text-white mb-4">Admin Portal</h1>
          <p className="text-gray-300 mb-6">Secure access required</p>
          <button
            onClick={() => signIn('google')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Portfolio Admin</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">{session.user.email}</span>
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-8">
        <div className="mb-6 flex gap-4 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('projects')}
            className={`pb-3 px-4 ${activeTab === 'projects' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`pb-3 px-4 ${activeTab === 'posts' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
          >
            Blog Posts
          </button>
        </div>

        {!isEditing ? (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">
                {activeTab === 'projects' ? 'Projects' : 'Blog Posts'}
              </h2>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
              >
                + Add New
              </button>
            </div>
            <div className="grid gap-4">
              {(activeTab === 'projects' ? projects : posts).map((item) => (
                <div key={item.id} className="bg-gray-800 p-4 rounded border border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-400">ID: {item.id}</p>
                    </div>
                    <button
                      onClick={() => {
                        setJsonInput(JSON.stringify(item, null, 2));
                        setIsEditing(true);
                      }}
                      className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <button
                onClick={() => {
                  setIsEditing(false);
                  setJsonInput('');
                }}
                className="text-gray-400 hover:text-white"
              >
                ← Back to list
              </button>
            </div>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              className="w-full h-96 p-4 bg-gray-800 border border-gray-700 rounded font-mono text-sm"
              placeholder="Paste or edit JSON here..."
            />
            <div className="mt-4 flex gap-4">
              <button
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setJsonInput('');
                }}
                className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
