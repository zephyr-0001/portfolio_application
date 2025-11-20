# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2024-01-21

### Changed
- **Navigation Order**: Reordered navbar to prioritize About before Work for better user flow
- **Technical Skills**: Updated homepage skills to accurately reflect proficiency (SQL Basics, API Integration, Requirements Analysis)
- **About Page Content**: Added "Beyond Work" section showcasing gaming and thriller-watching hobbies

### Added
- **LinkedIn Integration**: Added "Let's Connect" section on About page with LinkedIn profile link

### Removed
- **About Page**: Removed intern experience entry to streamline professional history

## [1.0.0] - 2024-01-21

### 🎨 Visual Design & Aesthetics

#### Deep Space Theme
- Implemented rich dark gradient background (deep blue/purple tones)
- Added animated star particle system using HTML5 Canvas with 200 twinkling stars
- Stars drift slowly and have alpha-based twinkle effects for depth
- Migrated from teal (#64ffda) to sky blue (#38bdf8) accent color for better cohesion

#### Liquid Glass Effects
- Enhanced glass panels with 16px blur and 180% saturation
- Added subtle light borders (top/left) for depth
- Implemented inset shadows for premium "liquid" appearance
- Applied to all cards, panels, and overlay elements

#### Apple-Style Animations
- Integrated Framer Motion for smooth, physics-based animations
- Parallax scrolling on hero section (fades and moves with scroll)
- Scroll-triggered scale animations with viewport detection
- Spring physics on buttons (stiffness: 400, damping: 17)
- Staggered entrance animations with 0.15s delays
- Custom cubic-bezier easing `[0.25, 0.1, 0.25, 1]` for Apple-like smoothness
- Enhanced hover effects (8px lift on cards, scale on buttons)

### 🏗️ Architecture & Structure

#### Homepage Restructure
- Transformed homepage from project gallery to intro-focused landing page
- Created compelling hero section with value proposition
- Added "What I Do" section with qualifications and toolkit showcase
- Implemented call-to-action sections guiding visitors to portfolio
- Moved project showcase to dedicated `/work` route

#### Admin Portal Separation
- Completely separated admin functionality into standalone `admin-portal/` directory
- Admin can be deployed independently to subdomain (e.g., `admin.yoursite.com`)
- Removed all authentication dependencies from main public site
- Main site API endpoints now read-only for security
- Both apps share same data files (`src/data/projects.json`, `src/data/posts.json`)

### 🔒 Security Enhancements

#### Google SSO Implementation
- Replaced password-based auth with NextAuth.js Google OAuth
- Email allowlist for access control (single admin email)
- Session-based authentication with secure callbacks
- Removed hardcoded credentials from codebase
- Added environment variable support for all sensitive data

#### Security Best Practices
- Public site has zero authentication code
- Admin routes protected by session verification
- API endpoints validate session server-side
- Recommended private GitHub repository for data protection
- No client-side exposure of admin functionality

### ✨ Features & Functionality

#### Navigation & UX
- Sticky navbar with blur effect and glass styling
- Active state highlighting for current route
- Custom smooth scroll animation (1.2s duration with easing)
- Responsive layout with mobile optimizations
- Route indicator disabled in development mode

#### Content Management
- Admin dashboard with tabbed interface (Projects/Blog Posts)
- JSON editor for direct content editing
- Google Sign-In integration
- Real-time data updates
- Support for complex artifact types (Personas, Matrices, Backlogs, Problem Statements)

#### Pages & Routes
- **Homepage** (`/`): Intro-focused landing with hero, about, and CTA sections
- **Work** (`/work`): Project gallery with filter-ready layout
- **Project Details** (`/project/[id]`): Individual project showcase with artifact views
- **About** (`/about`): Personal background, skills, experience, and languages
- **Blog** (`/blog`): Blog post listing
- **Blog Post** (`/blog/[id]`): Individual blog post display
- **Admin Portal** (separate app): Content management dashboard

### 🎯 Component Library

#### Created Components
- `StarBackground.js`: Canvas-based animated star field with drift and twinkle
- `Navbar.js`: Client component with active state tracking via `usePathname`
- `ProjectCard.js`: Glass-effect card with hover animations
- `ArtifactView.js`: Specialized renderer for 4 Enterprise UX artifact types
- `SessionProviderWrapper.js`: NextAuth session context (admin portal only)
- `Providers.js`: Session provider for admin portal

#### Design System
- CSS custom properties for colors, spacing, and transitions
- Utility classes for animations (fade-in, slide-up, scale-in)
- Stagger delay classes (delay-100 through delay-500)
- Hover effects (hover-card with lift and shadow)
- Glass panel styling with blur and saturation

### 🛠️ Technical Improvements

#### Build & Performance
- Next.js 16.0.3 with Turbopack for fast refresh
- React 19.2.0 with React Compiler enabled
- Framer Motion 12.x for optimized animations
- Static page generation for blog and projects
- ISR (Incremental Static Regeneration) ready

#### Developer Experience
- Disabled app ISR status indicator in development
- Fixed hydration warnings from browser extensions
- Consistent color scheme across all components
- Semantic versioning setup (v1.0.0)
- Comprehensive changelog for tracking changes

### 📝 Content & Data

#### Data Structure
- JSON-based content storage for easy editing
- Sample project data with full Enterprise UX artifacts
- Blog post structure with date, excerpt, and content
- Shared data layer between main site and admin portal
- Git-based version control for content

#### Sample Content
- Expense Reimbursement Portal project (complete with artifacts)
- Welcome blog post
- About page content derived from professional background
- Toolkit categorization (Product, Design, Technical)

### 🔧 Configuration & Deployment

#### Environment Setup
- `.env.local.example` provided for both apps
- Required variables: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`, `ADMIN_EMAIL`
- Vercel deployment configuration
- Build verification ensures clean production builds

#### Deployment Workflow
1. Push code to private GitHub repository
2. Deploy main site to Vercel (root directory)
3. Deploy admin portal to Vercel (admin-portal directory)
4. Configure environment variables in Vercel
5. Set up custom domains if desired

### 🐛 Bug Fixes & Refinements

#### Fixed Issues
- Route indicator ("N" icon) removed from bottom-left corner
- All button hover colors updated to match new accent scheme
- Hydration warnings addressed (browser extension related)
- Navbar active state logic corrected for `/work` route
- Smooth scroll performance optimized with custom easing
- Button color consistency across all pages
- Mobile responsiveness improvements

#### Polish & Refinements
- Removed old admin login page
- Cleaned up unused authentication routes
- Uninstalled next-auth from main app (admin only)
- Updated all button hover states to use sky blue
- Enhanced glass panel blur and saturation
- Improved animation timing and easing

### 📚 Documentation

#### Created Documentation
- `CHANGELOG.md`: Comprehensive version history
- `walkthrough.md`: Complete setup and usage guide with screenshots
- `implementation_plan.md`: Technical architecture decisions
- `.env.local.example`: Environment variable templates
- README sections for deployment and content management

### 🎨 Branding & Copy

#### Content Updates
- Changed navbar branding from "POPortfolio" to "Adithya's Portfolio"
- Hero headline: "Making 'Boring' Software Feel Like Magic. ✨"
- About section highlighting CSPO certification and Enterprise UX focus
- Toolkit breakdown into Product, Design, and Technical skills
- Personal, approachable tone throughout

---

## Version History

- **v1.0.1** (2024-01-21) - Content & Navigation Refinements
  - Improved navigation order (About first)
  - Accurate technical skills representation
  - Added personality with Beyond Work section
  - LinkedIn integration on About page
  
- **v1.0.0** (2024-01-21) - Initial Production Release
  - Complete feature set with intro-focused homepage
  - Standalone admin portal with Google SSO
  - Apple-style animations and parallax effects
  - Deep space theme with animated stars
  - Full content management system
  - Deployment ready for Vercel

---

## Future Roadmap

### Planned Features
- [ ] Project filtering and categorization on `/work` page
- [ ] Contact form integration
- [ ] Analytics integration
- [ ] SEO optimizations (meta tags, sitemap, robots.txt)
- [ ] RSS feed for blog
- [ ] Dark/Light mode toggle
- [ ] Enhanced mobile navigation
- [ ] Progressive Web App (PWA) support
- [ ] Performance monitoring
- [ ] A/B testing framework

### Under Consideration
- Headless CMS integration (Sanity, Contentful)
- Email newsletter subscription
- Social media integration
- Search functionality
- Comment system for blog posts
- Project case study templates
- Multi-language support
