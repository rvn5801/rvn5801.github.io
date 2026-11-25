import { useState } from 'react';
import { projects } from '../data/projects';

const CASE_SECTIONS = [
  ['problem', 'Problem'],
  ['approach', 'Approach'],
  ['validation', 'Validation'],
  ['outcome', 'Outcome']
];

export default function Projects() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      {projects.map(project => (
        <div className="row" key={project.id}>
          <div className="row-label">{project.stats}</div>
          <div className="row-body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tag-list">{project.tags.join(' · ')}</p>
            <p className="links-line">
              {project.github && <a href={project.github} target="_blank" rel="noopener">GitHub</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noopener">Live Demo</a>}
              {project.video && <a href={project.video} target="_blank" rel="noopener">Watch Demo</a>}
            </p>
            {project.caseStudy && (
              <>
                <button
                  className="case-toggle"
                  onClick={() => setOpenId(openId === project.id ? null : project.id)}
                  aria-expanded={openId === project.id}
                >
                  {openId === project.id ? 'Hide case study' : 'Read case study'}
                </button>
                {openId === project.id && (
                  <div className="case-study">
                    {CASE_SECTIONS.map(([key, label]) => (
                      <div key={key} className="case-block">
                        <h4>{label}</h4>
                        <p>{project.caseStudy[key]}</p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
