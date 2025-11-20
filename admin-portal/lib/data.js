import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'src/data');
const filePath = path.join(dataDirectory, 'projects.json');

export function getProjects() {
    // Create file if it doesn't exist
    if (!fs.existsSync(filePath)) {
        if (!fs.existsSync(dataDirectory)) {
            fs.mkdirSync(dataDirectory, { recursive: true });
        }
        fs.writeFileSync(filePath, '[]', 'utf8');
        return [];
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export function getProjectById(id) {
    const projects = getProjects();
    return projects.find(project => project.id === id);
}

export function saveProject(project) {
    const projects = getProjects();
    const index = projects.findIndex(p => p.id === project.id);

    if (index !== -1) {
        projects[index] = project;
    } else {
        projects.push(project);
    }

    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2), 'utf8');
    return project;
}

const postsFilePath = path.join(dataDirectory, 'posts.json');

export function getPosts() {
    if (!fs.existsSync(postsFilePath)) {
        if (!fs.existsSync(dataDirectory)) {
            fs.mkdirSync(dataDirectory, { recursive: true });
        }
        fs.writeFileSync(postsFilePath, '[]', 'utf8');
        return [];
    }

    const fileContents = fs.readFileSync(postsFilePath, 'utf8');
    return JSON.parse(fileContents);
}

export function getPostById(id) {
    const posts = getPosts();
    return posts.find(post => post.id === id);
}

export function savePost(post) {
    const posts = getPosts();
    const index = posts.findIndex(p => p.id === post.id);

    if (index !== -1) {
        posts[index] = post;
    } else {
        posts.push(post);
    }

    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), 'utf8');
    return post;
}
