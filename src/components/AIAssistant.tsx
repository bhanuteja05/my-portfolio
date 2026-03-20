import { useState, useRef, useEffect } from "react";
import { MdClose, MdSend, MdOutlineSmartToy } from "react-icons/md";
import "./styles/AIAssistant.css";

// Basic scripted responses for the AI assistant
const KNOWLEDGE_BASE: Record<string, string> = {
  "hello": "Hi there! I'm BT Assistant. How can I help you explore Bhanu Teja's portfolio?",
  "hi": "Hello! I'm Bhanu Teja's AI assistant. What would you like to know?",
  "who are you": "I am an AI assistant integrated into Bhanu Teja's portfolio to help you navigate and find information quickly.",
  "about": "Bhanu Teja is a B.Tech CSE student specializing in cybersecurity, networking, and ethical hacking. He's passionate about exploring digital security. Check out the About section for more details!",
  "skills": "Bhanu has expertise in Network Security, Ethical Hacking, Linux Administration, and Cloud architectures (AWS). Look at the Skills section for a full list.",
  "projects": "He has built several projects related to cybersecurity and web development. You can see his featured work in the Projects section.",
  "contact": "You can reach Bhanu via email at 19256bhanuteja@gmail.com, or through the Contact form at the bottom of the page.",
  "default": "I'm not exactly sure how to answer that, but Bhanu Teja is always happy to chat! Feel free to send a message through the Contact section."
};

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "👋 Hi! I'm BT Assistant. Ask me anything about Bhanu Teja's skills, experience, or projects!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  // Auto-scroll to latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // Simulate thinking and then respond
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let replyText = KNOWLEDGE_BASE["default"];

      for (const key in KNOWLEDGE_BASE) {
        if (lowerText.includes(key)) {
          replyText = KNOWLEDGE_BASE[key];
          break;
        }
      }

      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: "bot", text: replyText };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend(inputValue);
    }
  };

  return (
    <div className="ai-assistant-wrapper">
      {/* ── Chat Window ── */}
      <div className={`ai-chat-window ${isOpen ? "open" : ""}`}>
        <div className="ai-chat-header">
          <div className="ai-header-info">
            <div className="ai-avatar">
              <MdOutlineSmartToy />
            </div>
            <div>
              <h4>BT Assistant</h4>
              <span>Online</span>
            </div>
          </div>
          <button className="ai-close-btn" onClick={toggleChat} aria-label="Close Chat">
            <MdClose />
          </button>
        </div>

        <div className="ai-chat-body">
          {messages.map((msg) => (
            <div key={msg.id} className={`ai-message-row ${msg.sender}`}>
              <div className="ai-message-bubble">{msg.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="ai-chat-footer">
          <div className="ai-quick-replies">
            <button onClick={() => handleSend("Skills")}>Skills</button>
            <button onClick={() => handleSend("Projects")}>Projects</button>
            <button onClick={() => handleSend("Contact")}>Contact</button>
          </div>
          <div className="ai-input-area">
            <input
              type="text"
              placeholder="Ask anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="ai-send-btn"
              onClick={() => handleSend(inputValue)}
              disabled={!inputValue.trim()}
            >
              <MdSend />
            </button>
          </div>
        </div>
      </div>

      {/* ── Floating Action Button ── */}
      <button
        className={`ai-fab ${isOpen ? "hidden" : ""}`}
        onClick={toggleChat}
        aria-label="Open AI Assistant"
      >
        <span className="ai-fab-indicator" />
        <MdOutlineSmartToy />
      </button>
    </div>
  );
};

export default AIAssistant;
