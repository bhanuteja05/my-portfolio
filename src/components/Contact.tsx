import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:19256bhanuteja@gmail.com" data-cursor="disable">
                19256bhanuteja@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91 9014348127</p>
            <h4>Education</h4>
            <p>B.Tech in Computer Science & Engineering</p>
            <p style={{ opacity: 0.6, fontSize: "0.85em" }}>Lovely Professional University, Phagwara</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/bhanuteja05"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/bhanuteja007"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <h4 style={{ marginTop: "1rem" }}>Achievements</h4>
            <p style={{ fontSize: "0.9em", lineHeight: 1.5 }}>
              🏆 Top 10% globally on TryHackMe
            </p>
            <p style={{ fontSize: "0.9em", lineHeight: 1.5 }}>
              ✅ Completed Pre-Security & Cyber Security 101 paths
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Bhanu Teja</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
