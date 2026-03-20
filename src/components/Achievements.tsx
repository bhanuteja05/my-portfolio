import { FaTrophy, FaStar, FaFlagCheckered, FaMedal } from "react-icons/fa";
import "./styles/Achievements.css";

const achievements = [
  {
    icon: <FaTrophy />,
    title: "Top 10% Globally on TryHackMe",
    description:
      "Ranked in the top 10% of users worldwide on TryHackMe, showcasing consistent performance across hacking challenges, CTF rooms, and cybersecurity pathways.",
    badge: "🏆 Elite",
  },
  {
    icon: <FaFlagCheckered />,
    title: "Pre-Security Path Completed",
    description:
      "Successfully completed the TryHackMe Pre-Security learning path — covering networking, web fundamentals, and Linux basics essential for cybersecurity.",
    badge: "✅ Completed",
  },
  {
    icon: <FaStar />,
    title: "Cyber Security 101 Path",
    description:
      "Finished the Cyber Security 101 path on TryHackMe, gaining practical experience in offensive and defensive security techniques and tools.",
    badge: "✅ Completed",
  },
  {
    icon: <FaMedal />,
    title: "CTF Competitor",
    description:
      "Actively participates in Capture The Flag competitions, solving real-world cybersecurity challenges in areas including web exploitation, forensics, and cryptography.",
    badge: "🎯 Active",
  },
];

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2 className="achievements-title">
          Achievements
        </h2>
        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div className="achievement-card" key={i}>
              <div className="achievement-card-top">
                <div className="achievement-icon">{item.icon}</div>
                <span className="achievement-badge">{item.badge}</span>
              </div>
              <h4 className="achievement-name">{item.title}</h4>
              <p className="achievement-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
