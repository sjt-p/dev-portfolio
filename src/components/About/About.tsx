import "./About.css";

function About() {
    return(
        <section className="about" id="about">
            <div className="about-content">
                <div className="about-heading">
                    <span>01 / ABOUT</span>
                    <h2>About Me</h2>
                </div>
            
                <div className="about-text">
                    <p>
                        I'm a junior front-end developer with internship experience
                        working primarily on web application interfaces. During my
                        internship, I worked with React, Git, bug fixing, and UI
                        development, including building reusable components for
                        existing applications.
                    </p>

                    <p>
                        I'm currently focused on strengthening my front-end skills,
                        building practical projects with React, and continuing to
                        grow as a developer.
                    </p>           
                </div>
            </div>
        </section>

    );
}

export default About;