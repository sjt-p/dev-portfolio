import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-heading">
          <span>01 / ABOUT</span>
          <h2>About Me</h2>
        </div>

        <div className="about-text">
          <p>
            I'm an Information Technology graduate focused on front-end
            development with React and TypeScript.
          </p>
          <p>
            During an internship, I worked on the front-end of a web-based hotel
            management system, where I made layouts responsive, built a reusable
            avatar component, added skeleton loading screens, and fixed UI bugs.
          </p>

          <p>
            I'm looking for a junior front-end role where I can continue
            building and learning. This portfolio is a project of my own.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
