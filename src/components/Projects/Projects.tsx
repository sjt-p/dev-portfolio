import "./Projects.css";

function Projects() {
    return(
        <section className="projects" id="projects">
            <div className="projects-content">
                <h2>Projects</h2>

                <div className="projects-list">
                    <article className="project-card">
                        <h3>Developer Portfolio</h3>

                        <p>
                            A personal portfolio website built with React
                            and TypeScript, designed to showcase my front-end
                            development experience and projects.
                        </p>

                        <div className="project-tech">
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>CSS</span>
                        </div>

                        <div className="project-links">
                            <a href="#">Live Demo</a>
                            <a href="#">GitHub</a>
                        </div>

                    </article>
                </div>
            </div>
        </section>
    );
}

export default Projects;