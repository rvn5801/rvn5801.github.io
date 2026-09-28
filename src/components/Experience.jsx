import { experiences } from '../data/experience';

function renderBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {experiences.map((exp, idx) => (
        <div className="row" key={idx}>
          <div className="row-label">{exp.date}</div>
          <div className="row-body">
            <h3>{exp.role}</h3>
            <p className="row-meta">
              {exp.companyLink
                ? <a href={exp.companyLink} target="_blank" rel="noopener">{exp.company}</a>
                : exp.company} · {exp.location}
            </p>
            <ul>
              {exp.highlights.map((highlight, i) => (
                <li key={i}>{renderBold(highlight)}</li>
              ))}
            </ul>
            <p className="tag-list">{exp.tags.join(' · ')}</p>
            {exp.demo && <a href={exp.demo} target="_blank" rel="noopener">Watch Demo</a>}
          </div>
        </div>
      ))}
    </section>
  );
}
