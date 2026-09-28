const socials = [
  {
    href: 'mailto:redrouthu2025@gmail.com',
    label: 'Email',
    path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z'
  },
  {
    href: 'https://github.com/rvn5801',
    label: 'GitHub',
    path: 'M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z'
  },
  {
    href: 'https://linkedin.com/in/venkata-redrouthu',
    label: 'LinkedIn',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z'
  }
];

export default function Hero() {
  return (
    <aside className="sidebar">
      <img src="assets/profile2.png" alt="Venkata Narayana Redrouthu"
        onError={e => { e.target.style.display = 'none'; }}
      />
      <h1>Venkata Narayana Redrouthu</h1>
      <p className="role">ML &amp; GenAI Engineer · Biomedical AI · LLM Agents</p>

      <div className="social-row">
        {socials.map(s => (
          <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener" aria-label={s.label}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d={s.path} /></svg>
          </a>
        ))}
      </div>
    </aside>
  );
}
