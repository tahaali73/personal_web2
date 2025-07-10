import React, { useState, useEffect, useContext, useRef } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext'; // Adjust path if necessary

const ChatbotUI = () => {
  const { theme, themes } = useContext(ThemeContext);
  const currentTheme = themes[theme];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate a chatbot response
  const simulateBotResponse = (userMsg) => {
    let botResponse = "I'm sorry, I don't understand that.";
    if (userMsg.toLowerCase().includes("hello") || userMsg.toLowerCase().includes("hi")) {
      botResponse = "Hello there! How can I assist you today?";
    } else if (userMsg.toLowerCase().includes("services")) {
      botResponse = "I offer web design, UI/UX design, and responsive development services.";
    } else if (userMsg.toLowerCase().includes("contact")) {
      botResponse = "You can find my contact details on the 'Contact Me' page.";
    } else if (userMsg.toLowerCase().includes("portfolio")) {
      botResponse = "Please visit the 'Portfolio' section to see my latest projects.";
    } else if (userMsg.toLowerCase().includes("thank you") || userMsg.toLowerCase().includes("thanks")) {
      botResponse = "You're welcome! Is there anything else?";
    }

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: 'bot' },
      ]);
    }, 500); // Simulate typing delay
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newUserMessage = { text: inputMessage.trim(), sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      simulateBotResponse(inputMessage.trim());
      setInputMessage('');
    }
  };

  // Chat button position and styling (now on right bottom)
  const chatButtonClass = `
    fixed z-50
    bottom-4 right-4
    w-16 h-16 rounded-full
    flex items-center justify-center
    shadow-lg cursor-pointer
    transition-all duration-300
    lg:bottom-8 lg:right-8
    ${isOpen ? 'hidden' : 'block'}
    lg:w-20 lg:h-20
  `;

  // Chat window styling (now a smaller box, responsive)
  const chatWindowClass = `
    fixed z-50
    bottom-0 right-0 left-0
    w-full h-[450px] rounded-t-xl
    flex flex-col
    shadow-2xl
    transition-all duration-300 ease-in-out
    lg:bottom-8 lg:right-8 lg:w-96 lg:h-[500px] lg:rounded-xl
    ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 lg:translate-y-0 lg:opacity-0'}
  `;

  return (
    <>
      {/* Chat Toggle Button (Desktop & Mobile - Small Circle) */}
      <div
        className={chatButtonClass}
        style={{
          backgroundColor: currentTheme.accent,
          color: currentTheme.textButton,
          boxShadow: `0 4px 6px -1px ${currentTheme.shadow}, 0 2px 4px -1px ${currentTheme.shadow}`,
        }}
        onClick={() => setIsOpen(true)}
      >
        {/* Chat Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
        </svg>
      </div>

      {/* Chat Window */}
      <div
        className={chatWindowClass}
        style={{
          backgroundColor: currentTheme.backgroundSecondary,
          color: currentTheme.textPrimary,
          borderColor: currentTheme.border,
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 rounded-t-xl lg:rounded-t-xl lg:rounded-tl-xl lg:rounded-tr-xl"
          style={{
            backgroundColor: currentTheme.accent,
            color: currentTheme.textButton,
          }}
        >
          <h3 className="font-manrope font-semibold text-lg">Chat with Taha</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full hover:bg-opacity-80 transition-colors"
            style={{ color: currentTheme.textButton }}
            aria-label="Close chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Display Area */}
        <div
          className="flex-1 p-4 overflow-y-auto custom-scrollbar"
          style={{ backgroundColor: currentTheme.backgroundPrimary }}
        >
          {messages.length === 0 && (
            <p className="text-center" style={{ color: currentTheme.textSecondary }}>
              Type a message to start chatting!
            </p>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex mb-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-lg ${
                  msg.sender === 'user'
                    ? 'rounded-br-none' // User message style: accent background, textButton color, rounded on 3 corners
                    : 'rounded-bl-none' // Bot message style: backgroundSecondary, textPrimary color, rounded on 3 corners
                }`}
                style={{
                  backgroundColor: msg.sender === 'user' ? currentTheme.accent : currentTheme.backgroundSecondary,
                  color: msg.sender === 'user' ? currentTheme.textButton : currentTheme.textPrimary,
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} /> {/* For auto-scrolling */}
        </div>

        {/* Message Input */}
        <form
          onSubmit={handleSendMessage}
          className="p-4 border-t"
          style={{ borderColor: currentTheme.border, backgroundColor: currentTheme.backgroundSecondary }}
        >
          <div className="flex items-center">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 rounded-lg focus:outline-none focus:ring-2"
              style={{
                backgroundColor: currentTheme.backgroundPrimary,
                color: currentTheme.textPrimary,
                border: `1px solid ${currentTheme.border}`,
                '--tw-ring-color': currentTheme.accent,
              }}
            />
            <button
              type="submit"
              className="ml-2 p-3 rounded-lg transition-colors"
              style={{
                backgroundColor: currentTheme.accent,
                color: currentTheme.textButton,
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = currentTheme.hoverAccent}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = currentTheme.accent}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* Custom Scrollbar CSS */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${currentTheme.backgroundPrimary};
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: ${currentTheme.accent};
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${currentTheme.hoverAccent};
        }
      `}</style>
    </>
  );
};

export default ChatbotUI;
