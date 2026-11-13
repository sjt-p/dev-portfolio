import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <div className="skills-heading">
          <span>02 / SKILLS</span>
          <h2>Skills</h2>
        </div>
        <div className="skills-list">
          <div className="skill-group">
            <h3>Front-End</h3>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
          </div>

          <div className="skill-group">
            <h3>Tools</h3>
            <span>Git</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
