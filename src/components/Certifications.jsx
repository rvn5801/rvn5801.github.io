import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>
      {certifications.map(cert => (
        <div className="row" key={cert.id}>
          <div className="row-label">{cert.date}</div>
          <div className="row-body">
            <h3>{cert.name}</h3>
            <p className="row-meta">{cert.issuer}</p>
            {cert.link && <a href={cert.link} target="_blank" rel="noopener">View Certificate</a>}
          </div>
        </div>
      ))}
    </section>
  );
}
