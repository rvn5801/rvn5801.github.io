import { hackathons, hackathonPlaceholder } from '../data/hackathons';

export default function Hackathons() {
  return (
    <section id="hackathons" className="section">
      <h2>Hackathons</h2>

      {hackathons.length === 0 || hackathonPlaceholder ? (
        <p className="intro">Hackathon experiences coming soon. Check back after the next event.</p>
      ) : (
        hackathons.map(h => (
          <div className="row" key={h.id}>
            <div className="row-label">{h.date}</div>
            <div className="row-body">
              <h3>{h.name}{h.placement ? ` (${h.placement})` : ''}</h3>
              <p className="row-meta">{h.organizer}</p>
              <p><strong>{h.project}</strong></p>
              <p>{h.description}</p>
              <p className="tag-list">{h.tags?.join(' · ')}</p>
              {h.link && <a href={h.link} target="_blank" rel="noopener">View Project</a>}
            </div>
          </div>
        ))
      )}
    </section>
  );
}
