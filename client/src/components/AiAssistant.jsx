import React, { useState, useRef, useEffect } from 'react';
import '../styles/AiAssistant.css';

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [hoverStage, setHoverStage] = useState(0);
  const messagesEndRef = useRef(null);

  const YOUR_NAME = "Rashmi Sharma";

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Show welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      showWelcomeMessage();
    }
  }, [isOpen, messages]);

  const showWelcomeMessage = () => {
    const greeting = `Hi! 👋 I'm your personal AI companion. I can tell you everything about ${YOUR_NAME} — education, background, full-stack skills, leadership, chatbots, real-time websites, and projects.

What would you like to know?`;
    setMessages([{ text: greeting, isBot: true }]);
  };

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase().trim();

    if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
      return `Hey there! 👋 I'm your personal AI companion for ${YOUR_NAME}'s portfolio. Ask me anything about education, background, skills, leadership, or projects!`;
    }

    if (msg.includes('education') || msg.includes('school') || msg.includes('10th') || msg.includes('12th')) {
      return "I completed my 10th and 12th from Arya Senior Secondary School, Dhigawa Mandi, Bhiwani. Education has been a strong foundation for my journey!";
    }

    if (msg.includes('bhiwani') || msg.includes('haryana') || msg.includes('from') || msg.includes('belong') || msg.includes('background') || msg.includes('hometown')) {
      return "I belong to Bhiwani, Haryana. That's where I grew up and completed my schooling. It's a great place that shaped who I am today!";
    }

    if (msg.includes('full stack') || msg.includes('skill') || msg.includes('enthusiast') || msg.includes('chatbot') || msg.includes('website') || msg.includes('tech')) {
      return "I'm a passionate full stack developer with expertise in React, Node.js, MongoDB, and Express. I've built multiple chatbots and real-time working websites that are live and functional!";
    }

    if (msg.includes('leadership') || msg.includes('spark') || msg.includes('club') || msg.includes('executive')) {
      return "I have strong leadership skills! I'm the Senior Executive of the Spark Club. Leadership is about inspiring teams and driving positive change.";
    }

    if (msg.includes('project') || msg.includes('what have you') || msg.includes('built') || msg.includes('revenue')) {
      return "I've worked on several amazing projects including CertifyChain (certificate verification), United Packers (e-commerce), Hospital Management System, and a Bubble Game. Last year I also worked on revenue-generating projects that produced real results!";
    }

    if (msg.includes('about') || msg.includes('who are you') || msg.includes('tell me about')) {
      return `I'm ${YOUR_NAME}'s AI assistant! Here's a quick summary: I'm from Bhiwani, Haryana, completed my schooling at Arya Senior Secondary School. I'm a full stack enthusiast who has built chatbots and real-time websites. I'm the Senior Executive of Spark Club and have worked on various projects. What else would you like to know?`;
    }

    if (msg.includes('contact') || msg.includes('reach') || msg.includes('email') || msg.includes('linkedin')) {
      return "You can reach out to me through my contact page or via LinkedIn, GitHub, and email links in the portfolio. I'm always happy to connect!";
    }

    // Default reply
    return "That's a great question! I can tell you everything about education, background, skills, leadership, projects, or contact info. What would you like to explore?";
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const userMsg = userInput;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setUserInput('');

    // Simulate bot thinking
    setTimeout(() => {
      const botReply = getBotResponse(userMsg);
      setMessages(prev => [...prev, { text: botReply, isBot: true }]);
    }, 700);
  };

  const quickReply = (text) => {
    setMessages(prev => [...prev, { text, isBot: false }]);
    setTimeout(() => {
      const botReply = getBotResponse(text);
      setMessages(prev => [...prev, { text: botReply, isBot: true }]);
    }, 600);
  };

  const handleFloatingHover = () => {
    setHoverStage(prev => (prev + 1) % 3);
  };

  const getImageStage = () => {
    switch(hoverStage) {
      case 1:
        return require('../assets/p2.png').default || require('../assets/p2.png');
      case 2:
        return require('../assets/p3.png').default || require('../assets/p3.png');
      default:
        return require('../assets/p1.png').default || require('../assets/p1.png');
    }
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <div 
        className="floating-assistant"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={handleFloatingHover}
      >
        <img 
          src={getImageStage()} 
          alt="Your AI Assistant"
          className={`assistant-image stage-${hoverStage}`}
        />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-info">
              <h3>Your AI Companion</h3>
              <p className="header-subtitle">Always here to help</p>
            </div>
            <button 
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div 
                key={idx}
                className={`message ${msg.isBot ? 'bot-message' : 'user-message'}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="quick-replies">
            <button onClick={() => quickReply('Tell me about your education')}>
              📚 Education
            </button>
            <button onClick={() => quickReply('Where are you from?')}>
              📍 Background
            </button>
            <button onClick={() => quickReply('What are your skills?')}>
              💻 Skills
            </button>
            <button onClick={() => quickReply('Tell me about your leadership')}>
              👥 Leadership
            </button>
            <button onClick={() => quickReply('What projects have you done?')}>
              🚀 Projects
            </button>
          </div>

          {/* Chat Input */}
          <div className="chat-input-area">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything..."
              className="chat-input"
            />
            <button 
              className="send-btn"
              onClick={handleSendMessage}
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistant;
