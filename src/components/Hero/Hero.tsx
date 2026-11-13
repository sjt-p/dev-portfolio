import "./Hero.css";

function Hero() {
  return (
    <section className="hero-body">
      <div className="hero-content">
        <h1 className="dev-name">Jeremy Tan</h1>

        <p className="dev-title">Junior Front-End Developer</p>

        <p className="dev-desc">
          I build responsive, reusable React interfaces.
        </p>

        <div className="hero-actions">
          <a href="#projects">View My Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
