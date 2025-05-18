
import React, { useState } from 'react';
import { Terminal, Send, X } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi, I'm your AI Security Assistant. How can I help you with your cybersecurity needs today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      let response: Message;
      
      // Generate contextual responses based on keywords
      if (input.toLowerCase().includes('threat') || input.toLowerCase().includes('attack')) {
        response = {
          id: (Date.now() + 1).toString(),
          content: "I've analyzed recent threats across your network. There are 3 potential vulnerabilities detected in the eastern cluster. Would you like me to run an automated mitigation protocol?",
          sender: 'ai',
          timestamp: new Date(),
        };
      } else if (input.toLowerCase().includes('blockchain') || input.toLowerCase().includes('smart contract')) {
        response = {
          id: (Date.now() + 1).toString(),
          content: "Your blockchain network is secure. All smart contracts have passed security audits. The latest validator node was added 2 hours ago and is functioning properly.",
          sender: 'ai',
          timestamp: new Date(),
        };
      } else if (input.toLowerCase().includes('scan') || input.toLowerCase().includes('vulnerable')) {
        response = {
          id: (Date.now() + 1).toString(),
          content: "Scanning network infrastructure... Complete. Identified 2 outdated SSL certificates and 1 potential XSS vulnerability in the admin portal. Would you like me to provide remediation steps?",
          sender: 'ai',
          timestamp: new Date(),
        };
      } else {
        response = {
          id: (Date.now() + 1).toString(),
          content: "I'm analyzing your request. Our AI and blockchain systems are working together to provide you with the most accurate security assessment. Is there a specific area of your infrastructure you're concerned about?",
          sender: 'ai',
          timestamp: new Date(),
        };
      }
      
      setMessages(prevMessages => [...prevMessages, response]);
    }, 1000);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`fixed bottom-4 right-4 z-10 transition-all duration-300 ${isExpanded ? 'w-80 h-96' : 'w-auto h-auto'}`}>
      {isExpanded ? (
        <div className="cyber-card h-full flex flex-col">
          <div className="flex items-center justify-between p-3 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-cyber-blue" />
              <h3 className="text-sm font-semibold text-white">AI Security Assistant</h3>
            </div>
            <button
              onClick={toggleExpanded}
              className="text-slate-400 hover:text-white p-1 rounded"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-cyber-blue text-white'
                      : 'bg-slate-800 text-slate-200'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t border-slate-700 p-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about security..."
                className="flex-1 bg-slate-800 text-white rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-cyber-blue"
              />
              <button
                type="submit"
                className="p-2 bg-cyber-blue rounded-md hover:bg-opacity-90"
              >
                <Send size={16} className="text-white" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleExpanded}
          className="cyber-card flex items-center gap-2 bg-cyber-blue hover:bg-opacity-90"
        >
          <Terminal size={16} className="text-white" />
          <span className="text-sm font-medium text-white">AI Assistant</span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
