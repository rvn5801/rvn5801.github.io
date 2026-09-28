export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
      <p>Venkata Narayana Redrouthu · Data Scientist &amp; ML Engineer</p>
      <p>© {currentYear} · Built with React + Vite</p>
    </footer>
  );
}
