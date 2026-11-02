import React, { useState } from "react";

const EMAIL = "tashini.maleesha@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 900 }}>
        <h2 className="section-title">Contact</h2>
        <p className="section-sub">Have a role, project, or question? Send a message and I'll reply by email.</p>
        <div className="row g-4">
          <div className="col-md-7">
            <form className="panel" action="https://formspree.io/f/mzzrqqnj" method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" name="name" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name="email" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" name="message" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-accent w-100">Send message</button>
            </form>
          </div>
          <div className="col-md-5">
            <div className="panel">
              <h3 className="h5">Elsewhere</h3>
              <p className="mb-1"><a className="link-arrow" href="https://github.com/Tash2001" target="_blank" rel="noopener noreferrer">GitHub</a></p>
              <p className="mb-1"><a className="link-arrow" href="https://www.linkedin.com/in/tashini-maleesha-133176234/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
              <p className="mb-3"><a className="link-arrow" href="tel:+94764467569">+94 76 446 7569</a></p>
              <button className="btn btn-ghost w-100" onClick={copy}>
                {copied ? "Email copied" : "Copy email address"}
              </button>
              <p className="muted small mt-3 mb-0">Based in Rajagiriya, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;