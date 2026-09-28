import { publications } from '../data/publications';

export default function Publications() {
  return (
    <section id="publications" className="section">
      <h2>Publications</h2>
      {publications.map((pub, idx) => (
        <div className="row" key={idx}>
          <div className="row-label">{pub.type}</div>
          <div className="row-body">
            <h3>{pub.title}</h3>
            <p className="row-meta">
              {pub.venue}
              {pub.institution ? `, ${pub.institution}` : pub.issue ? `, ${pub.issue}` : ''} · {pub.date}
            </p>
            {pub.cert && <a href={pub.cert} target="_blank" rel="noopener">View Certificate</a>}
          </div>
        </div>
      ))}
    </section>
  );
}
