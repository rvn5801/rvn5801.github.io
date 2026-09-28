import { projects } from '../data/projects';

export default function Projects() {
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
          </div>
        </div>
      ))}
    </section>
  );
}
