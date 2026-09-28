import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      {skillCategories.map((category, idx) => (
        <div className="row" key={idx}>
          <div className="row-label">{category.name}</div>
          <div className="row-body tag-list">{category.skills.join(' · ')}</div>
        </div>
      ))}
    </section>
  );
}
