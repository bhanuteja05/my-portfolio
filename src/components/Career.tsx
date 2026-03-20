import { MdVerified } from "react-icons/md";
import { FaGraduationCap, FaAward, FaSearch, FaShieldAlt, FaLinux } from "react-icons/fa";
import "./styles/Career.css";

const educationData = [
  {
    title: "B.Tech – Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    date: "2023 – Present",
    description:
      "Pursuing B.Tech in CSE with focus on cybersecurity, networking, and ethical hacking. Actively participating in CTF competitions and cybersecurity research.",
    icon: <FaGraduationCap />,
  },
];

const certificationsData = [
  {
    title: "AWS Solutions Architect Associate",
    subtitle: "Amazon Web Services",
    date: "MAR '26",
    description:
      "Validated expertise in designing distributed systems on AWS, including compute, storage, networking, and security architecture.",
    link: "https://www.credly.com/badges/aws-solutions-architect-associate",
    icon: <FaAward />,
  },
  {
    title: "CompTIA Network+",
    subtitle: "CompTIA",
    date: "JUN '25",
    description:
      "Demonstrated competency in networking concepts, infrastructure, operations, security, and troubleshooting.",
    link: "https://www.credly.com/badges/comptia-network-plus",
    icon: <FaShieldAlt />,
  },
  {
    title: "Quick Heal DIFR Certification",
    subtitle: "Quick Heal Academy",
    date: "MAR '26",
    description:
      "Certified in Digital Forensics & Incident Response (DIFR), covering malware analysis, evidence collection, and incident handling.",
    link: "https://www.quickheal.com/academy",
    icon: <FaSearch />,
  },
  {
    title: "Linux System Administration",
    subtitle: "RH124 & RH134 – Red Hat",
    date: "JUN-JUL '25",
    description:
      "Hands-on Red Hat Linux training covering user management, file systems, permissions, networking, service configuration, and VM deployment.",
    link: "",
    icon: <FaLinux />,
  },
];

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2 className="career-title">
          Education <span>&</span>
          <br />Certifications
        </h2>

        <div className="career-columns">
          {/* ── Left Column: Education ── */}
          <div className="career-col">
            <div className="col-label">
              <span className="col-label-dot" />
              Education
            </div>
            {educationData.map((edu, i) => (
              <div className="edu-card" key={i}>
                <div className="edu-icon">{edu.icon}</div>
                <div className="edu-body">
                  <h4>{edu.title}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-location">{edu.location}</p>
                  <p className="edu-desc">{edu.description}</p>
                  <span className="edu-date">{edu.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Divider ── */}
          <div className="career-divider" />

          {/* ── Right Column: Certifications ── */}
          <div className="career-col">
            <div className="col-label">
              <span className="col-label-dot" />
              Certifications
            </div>
            <div className="cert-list">
              {certificationsData.map((cert, i) => (
                <div className="cert-item" key={i}>
                  <div className="cert-item-icon">{cert.icon}</div>
                  <div className="cert-item-body">
                    <div className="cert-item-header">
                      <h4>{cert.title}</h4>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="verify-link"
                          data-cursor="disable"
                          aria-label="Verify Credential"
                          title="Verify Credential"
                        >
                          <MdVerified />
                        </a>
                      )}
                    </div>
                    <p className="cert-item-sub">{cert.subtitle}</p>
                    <p className="cert-item-desc">{cert.description}</p>
                    <span className="cert-item-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
