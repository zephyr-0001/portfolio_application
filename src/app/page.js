'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function HomePage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const targetPosition = target.offsetTop - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1200;
      let start = null;

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <div ref={containerRef} className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>
      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        style={{
          marginBottom: 'var(--spacing-xl)',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          opacity: heroOpacity,
          y: heroY,
          scale: heroScale
        }}
      >
        <motion.h1
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            fontWeight: 'bold',
            color: 'var(--white)',
            lineHeight: 1.1,
            marginBottom: 'var(--spacing-md)'
          }}
        >
          Making "Boring" Software <br />
          <motion.span
            style={{ color: 'var(--accent)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Feel Like Magic. ✨
          </motion.span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            marginBottom: 'var(--spacing-lg)'
          }}
        >
          Hey, I'm Adithya! I take messy business requirements and turn them into products people actually <i>want</i> to use. No jargon, just results.
        </motion.p>
        <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.a
            href="#about"
            onClick={(e) => smoothScrollTo(e, '#about')}
            className="btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Learn More
          </motion.a>
          <motion.div
            style={{ display: 'inline-block' }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/work" className="btn btn-primary">See My Work</Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px", amount: 0.3 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ marginBottom: 'var(--spacing-xl)' }}
      >
        <motion.div
          className="glass-panel"
          style={{ maxWidth: '900px', margin: '0 auto' }}
          whileInView={{ scale: [0.95, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ color: 'var(--accent)', fontSize: '2rem', marginBottom: 'var(--spacing-md)' }}
          >
            What I Do
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              I'm a <strong>Certified Scrum Product Owner (CSPO)</strong> currently working at StoneX Group Inc.
              I specialize in bridging the gap between complex technical systems and human needs - translating
              "business speak" into clear technical requirements and redesigning internal tools to be actually usable.
            </p>
            <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              My superpower? Making enterprise software that people don't hate. I focus on <strong>Enterprise UX</strong>,
              turning clunky internal tools into experiences that help teams work faster and smarter.
            </p>
          </motion.div>

          <div style={{ marginTop: 'var(--spacing-md)' }}>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              style={{ color: 'var(--white)', fontSize: '1.3rem', marginBottom: '1rem' }}
            >
              My Toolkit
            </motion.h3>
            <motion.div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                { title: 'Product', skills: 'Agile, Scrum, User Stories, Backlog Management' },
                { title: 'Design', skills: 'Figma, Wireframing, User Research, Personas' },
                { title: 'Technical', skills: 'SQL Basics, API Integration, Requirements Analysis' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.03)',
                    border: '1px solid rgba(56, 189, 248, 0.1)',
                    cursor: 'default'
                  }}
                >
                  <h4 style={{ color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.skills}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '1rem' }}
        >
          Want to see it in action?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: 'var(--spacing-md)' }}
        >
          Check out my portfolio of real projects with detailed breakdowns of my process.
        </motion.p>
        <motion.div
          style={{ display: 'inline-block' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link href="/work" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            View Portfolio 🚀
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
