const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#learning', label: 'Learning' },
  { href: '#skills', label: 'Skills' },
  { href: '#hackathons', label: 'Hackathons' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="topnav">
      {navLinks.map(link => (
        <a key={link.href} href={link.href} onClick={e => handleClick(e, link.href)}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
