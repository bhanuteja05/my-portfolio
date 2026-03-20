import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xkgjwndw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Get In Touch</h3>
        <p className="contact-subtitle">
          Have a question, project idea, or just want to say hi? Send me a message — I'll get back to you soon.
        </p>

        <div className="contact-layout">
          {/* ── Left: Info ── */}
          <div className="contact-info">
            <div className="contact-info-block">
              <span className="info-label">Email</span>
              <a href="mailto:19256bhanuteja@gmail.com" data-cursor="disable" className="info-value info-link">
                19256bhanuteja@gmail.com
              </a>
            </div>

            <div className="contact-info-block">
              <span className="info-label">Phone</span>
              <span className="info-value">+91 9014348127</span>
            </div>

            <div className="contact-info-block">
              <span className="info-label">Location</span>
              <span className="info-value">Phagwara, Punjab, India</span>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/bhanuteja05"
                target="_blank"
                data-cursor="disable"
                className="social-pill"
              >
                <FaGithub /> Github <MdArrowOutward />
              </a>
              <a
                href="https://linkedin.com/in/bhanuteja007"
                target="_blank"
                data-cursor="disable"
                className="social-pill"
              >
                <FaLinkedin /> LinkedIn <MdArrowOutward />
              </a>
            </div>

            <div className="contact-credit">
              <h2>
                Designed &amp; Developed <br /> by <span>Bhanu Teja</span>
              </h2>
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>

            <div className="form-field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>

            <div className="form-field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                placeholder="Write your message here..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`form-submit ${status === "sending" ? "sending" : ""}`}
              disabled={status === "sending"}
              data-cursor="disable"
            >
              {status === "sending" ? (
                <span className="btn-inner">Sending…</span>
              ) : (
                <span className="btn-inner">
                  Send Message <MdSend />
                </span>
              )}
            </button>

            {status === "sent" && (
              <p className="form-feedback success">
                ✅ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-feedback error">
                ❌ Something went wrong. Please try emailing me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
