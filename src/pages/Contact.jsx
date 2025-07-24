import React from "react";

const Contact = () => {
    return (
        <section className="py-5" data-aos="fade-up">
            <div className="container">
                <h2 className="text-center mb-4">Contact Me</h2>

                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form action="https://formspree.io/f/mzzrqqnj" method="POST">
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
                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>

                        <hr className="my-5" />

                        <div className="text-center">
                            <h5 className="mb-3">Connect with me</h5>
                            <a
                                href="https://github.com/Tash2001"
                                className="btn btn-outline-dark mx-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tashini-maleesha-133176234/"
                                className="btn btn-outline-dark mx-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <div className="mt-3">
                                <button
                                    className="btn btn-outline-dark"
                                    onClick={() => navigator.clipboard.writeText("tashini.maleesha@gmail.com")}
                                >
                                    Email: tashini.maleesha@gmail.com
                                </button>
                            </div>

                            <div className="mt-3">
                                <button
                                    className="btn btn-outline-dark"
                                    onClick={() => navigator.clipboard.writeText("+94(76) 446 7569")}
                                >
                                    Tel: +94(76) 446 7569
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;
