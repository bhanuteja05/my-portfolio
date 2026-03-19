import { PropsWithChildren } from "react";
import { IoMdDownload } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              BHANU
              <br />
              <span>TEJA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Cybersecurity</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Enthusiast</div>
              <div className="landing-h2-2">Researcher</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Researcher</div>
              <div className="landing-h2-info-1">Enthusiast</div>
            </h2>
            <div className="landing-cv-buttons" style={{ position: 'relative', zIndex: 99999, pointerEvents: 'auto' }}>
              <a href="/Bhanuteja_Resume.pdf" download="Bhanuteja_Resume.pdf" className="cv-btn primary-cv-btn" style={{ pointerEvents: 'auto' }}>
                Download CV <IoMdDownload className="cv-icon" />
              </a>
              <a href="/Bhanuteja_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cv-btn secondary-cv-btn" style={{ pointerEvents: 'auto' }}>
                View CV <MdArrowOutward className="cv-icon" />
              </a>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
