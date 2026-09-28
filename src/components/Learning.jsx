import { learningFolders } from '../data/learning';

export default function Learning() {
  return (
    <section id="learning" className="section">
      <h2>Learning &amp; Coursework</h2>
      {learningFolders.map(folder => (
        <div className="row" key={folder.id}>
          <div className="row-label">{folder.title}</div>
          <div className="row-body">
            <p className="row-meta">{folder.description}</p>
            {folder.courses.map((course, idx) => (
              <p key={idx}>
                <strong>{course.title}</strong>: {course.topics}
                {course.github && <> (<a href={course.github} target="_blank" rel="noopener">GitHub</a>)</>}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
