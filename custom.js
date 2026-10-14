@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Inter:wght@300;400;500;600&display=swap');

:root {
    --nav-bg: #1a202c;
    --nav-border: #c9b99a;
    --accent: #3d5a80;
    --accent-dark: #1e3a5f;
    --accent-light: #eef2f7;
    --text-primary: #1a202c;
    --text-secondary: #4a5568;
    --text-muted: #718096;
    --surface: #ffffff;
    --surface-2: #f8f7f5;
    --border: #e2e0db;
    --radius: 12px;
    --radius-sm: 8px;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
    --shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
    --shadow-lg: 0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06);
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    line-height: 1.7;
    color: var(--text-primary);
    background-color: var(--surface-2);
    margin: 0;
    padding: 0;
    padding-bottom: 80px;
}

/* NAVBAR */
.site-nav {
    background: var(--nav-bg);
    border-bottom: 3px solid var(--nav-border);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-md);
}

.nav-inner {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
}

.nav-brand {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    letter-spacing: 0.01em;
    transition: color 0.2s;
}

.nav-brand:hover { color: var(--nav-border); }

.nav-links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: rgba(255,255,255,0.68);
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 0.4rem 0.85rem;
    border-radius: 4px;
    transition: all 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
    color: #fff;
    background: rgba(255,255,255,0.1);
}

.nav-toggle {
    display: none;
    background: none;
    border: 1.5px solid rgba(255,255,255,0.35);
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    padding: 0.35rem 0.5rem;
    font-size: 1.1rem;
    line-height: 1;
}

/* PAGE WRAPPER */
.page-content {
    max-width: 1000px;
    margin: 2.5rem auto;
    padding: 0 2rem;
}

/* HERO */
.hero {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2.5rem;
    align-items: start;
    margin-bottom: 2rem;
}

.hero-text .eyebrow {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-light);
    padding: 0.25rem 0.8rem;
    border-radius: 3px;
    margin-bottom: 1rem;
}

.hero-text h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 500;
    color: var(--text-primary);
    line-height: 1.2;
    margin: 0 0 1rem;
}

.hero-text h1 em {
    font-style: italic;
    color: var(--accent);
}

.hero-text p {
    color: var(--text-secondary);
    font-size: 1rem;
    max-width: 520px;
    margin: 0;
    font-weight: 300;
    line-height: 1.75;
}

.hero-photo { flex-shrink: 0; }

.hero-photo img {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 0 0 3px var(--nav-border), var(--shadow-lg);
    display: block;
}

/* SECTION CARD */
.section-card {
    background: var(--surface);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
    padding: 2rem;
    margin-bottom: 1.5rem;
}

.section-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--text-primary);
    margin: 0 0 1.25rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--border);
}

/* NEWS */
.news-list { display: flex; flex-direction: column; gap: 0; }

.news-item {
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 1rem;
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--border);
    align-items: baseline;
}

.news-item:last-child { border-bottom: none; padding-bottom: 0; }

.news-date {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    background: #f0ede8;
    border: 1px solid var(--border);
    border-radius: 3px;
    padding: 0.15rem 0.6rem;
    text-align: center;
    white-space: nowrap;
    align-self: start;
    margin-top: 0.2rem;
    text-transform: uppercase;
}

.news-text { font-size: 0.95rem; color: var(--text-secondary); margin: 0; line-height: 1.6; }

/* CONTACT */
.contact-row { display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center; }

.contact-link {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    color: var(--accent);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    transition: color 0.2s;
}

.contact-link:hover { color: var(--accent-dark); }
.contact-link svg, .contact-link img { flex-shrink: 0; }

/* PUBLICATIONS */
.pub-list { display: flex; flex-direction: column; gap: 1rem; }

.pub-card {
    border: 1px solid var(--border);
    border-left: 3px solid transparent;
    border-radius: var(--radius-sm);
    padding: 1.1rem 1.25rem;
    background: var(--surface-2);
    transition: border-left-color 0.2s, box-shadow 0.2s;
}

.pub-card:hover {
    border-left-color: var(--accent);
    box-shadow: var(--shadow-sm);
}

.pub-title {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-primary);
    margin: 0 0 0.4rem;
    line-height: 1.5;
}

.pub-authors { font-size: 0.875rem; color: var(--text-secondary); margin: 0 0 0.2rem; }
.pub-venue { font-size: 0.82rem; color: var(--text-muted); font-style: italic; margin: 0 0 0.6rem; }

.pub-link {
    font-size: 0.8rem;
    color: var(--accent);
    text-decoration: none;
    word-break: break-all;
    opacity: 0.8;
    transition: opacity 0.2s;
}

.pub-link:hover { opacity: 1; text-decoration: underline; }

/* CV */
.cv-embed {
    width: 100%;
    height: 85vh;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    display: block;
}

/* FOOTER */
.site-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--nav-bg);
    border-top: 3px solid var(--nav-border);
    text-align: center;
    padding: 0.7rem 1rem;
    color: rgba(255,255,255,0.45);
    font-size: 0.8rem;
    letter-spacing: 0.04em;
    z-index: 100;
}

/* RESPONSIVE */
@media (max-width: 640px) {
    .page-content { padding: 0 1rem; margin: 1.5rem auto; }
    .hero { grid-template-columns: 1fr; gap: 1.5rem; }
    .hero-photo { order: -1; }
    .hero-photo img { width: 120px; height: 120px; }
    .nav-toggle { display: block; }
    .nav-links {
        display: none;
        flex-direction: column;
        gap: 0;
        background: #111827;
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        padding: 0.5rem 1rem 1rem;
        border-bottom: 3px solid var(--nav-border);
        z-index: 99;
    }
    .nav-links.open { display: flex; }
    .nav-links a { display: block; padding: 0.6rem 0.5rem; }
    .news-item { grid-template-columns: 1fr; gap: 0.35rem; }
    .contact-row { gap: 1rem; }
    .section-card { padding: 1.25rem; }
}
