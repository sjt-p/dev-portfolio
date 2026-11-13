import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <div className="projects-heading">
          <span>03 / PROJECTS</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-list">
          <article className="project-card">
            <div className="project-info">
              <h3>Developer Portfolio</h3>

              <p>
                A personal portfolio website built with React and TypeScript,
                designed to showcase my front-end development experience and
                projects.
              </p>
            </div>

            <div className="project-tech">
              <span>React</span>
              <span>TypeScript</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/sjt-p/dev-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://jeremytandev.vercel.app"
                target="blank"
                rel="noreferrer"
              >
                Live site
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
