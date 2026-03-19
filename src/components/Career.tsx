import { MdVerified } from "react-icons/md";
import { FaGraduationCap, FaAward, FaSearch, FaShieldAlt, FaLinux } from "react-icons/fa";
import "./styles/Career.css";

const certifications = [
  {
    title: "B.Tech – Computer Science & Engineering",
    subtitle: "Lovely Professional University, Phagwara, Punjab",
    date: "2023 – Present",
    description:
      "Pursuing B.Tech in CSE with focus on cybersecurity, networking, and ethical hacking. Actively participating in CTF competitions and cybersecurity research.",
    link: "",
    icon: <FaGraduationCap />,
  },
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
      "Certified in Digital Forensics & Incident Response (DIFR), covering malware analysis, evidence collection, and incident handling procedures.",
    link: "https://www.quickheal.com/academy",
    icon: <FaSearch />,
  },
  {
    title: "Linux System Administration Training",
    subtitle: "RH124 & RH134",
    date: "JUN-JUL '25",
    description:
      "Hands-on Red Hat Linux training covering user management, file systems, permissions, networking, service configuration, and Apache CloudStack VM deployment.",
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
        
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon-wrapper">
                {cert.icon}
              </div>
              <div className="cert-content">
                <h4>{cert.title}</h4>
                <h5 className="cert-provider">{cert.subtitle}</h5>
                <p className="cert-desc">{cert.description}</p>
              </div>
              <div className="cert-footer">
                <span className="cert-date">{cert.date}</span>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
