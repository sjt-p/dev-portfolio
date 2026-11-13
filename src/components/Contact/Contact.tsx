import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-heading">
          <span>04 / CONTACT</span>
          <h2>Contact</h2>
        </div>

        <div className="contact-info">
          <p>
            I'm currently looking for junior front-end development
            opportunities.
          </p>

          <div className="contact-links">
            <a href="https://github.com/sjt-p" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/stevenjeremytan"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="mailto:tanstevenjeremy@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
