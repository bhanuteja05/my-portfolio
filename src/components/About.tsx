import { useEffect, useRef } from "react";
import "./styles/About.css";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-content-wrapper">
        <div className="about-me">
          <h3 className="title">About Me</h3>
          <p className="para">
            Cybersecurity enthusiast and B.Tech CSE student at Lovely Professional
            University with hands-on experience in penetration testing, network
            security, and vulnerability assessment. Proficient in Python, Bash, C/C++,
            and Solidity, with deep expertise in tools like Metasploit, Wireshark, Nmap,
            and Burp Suite. AWS Solutions Architect Associate and CompTIA Network+
            certified. Ranked in the Top 10% globally on TryHackMe. Passionate about
            building automated security tools and defending digital infrastructure.
          </p>
        </div>
        <div className="profile-image-wrapper">
          <div className="profile-image-glow"></div>
          <div className="profile-image-border">
            <img
              src="/images/profile.png"
              alt="Bhanu Teja - Cybersecurity Professional"
              className="profile-image"
              loading="lazy"
            />
          </div>
          <div className="profile-scan-line"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
