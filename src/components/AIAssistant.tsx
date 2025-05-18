
import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    { text: "Hello! I'm your SecureChainAI assistant. How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    setMessages([...messages, { text: inputValue, isUser: true }]);
    setInputValue('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I'm analyzing your request. As a demo, this is a simulated response. In a production environment, I would connect to our AI backend to provide real assistance.", 
        isUser: false 
      }]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessages([...messages, { text: suggestion, isUser: true }]);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "I'm analyzing your request about " + suggestion.toLowerCase() + ". As a demo, this is a simulated response. In a production environment, I would connect to our AI backend to provide real assistance.", 
        isUser: false 
      }]);
    }, 1000);
  };

  const suggestions = [
    "How do I detect network intrusions?",
    "Explain blockchain security features",
    "What AI models detect malware?",
    "How to secure cloud infrastructure",
    "Best practices for secure collaboration"
  ];

  return (
    <>
      {/* Floating button */}
      <button 
        onClick={toggleAssistant}
        className={cn(
          "fixed right-4 bottom-4 z-50 flex items-center justify-center p-3 rounded-full shadow-lg transition-all duration-300",
          isOpen ? "bg-slate-700 rotate-90" : "bg-cyber-blue"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>
      
      {/* Chat window */}
      <div 
        className={cn(
          "fixed right-4 bottom-20 w-80 sm:w-96 bg-slate-900 border border-slate-800 rounded-lg shadow-xl z-40 transition-all duration-300 flex flex-col",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
        )}
      >
        {/* Header */}
        <div className="p-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-cyber-success rounded-full animate-pulse"></div>
            <h3 className="font-medium text-sm text-white">AI Security Assistant</h3>
          </div>
          <span className="text-xs text-slate-400">SecureChainAI</span>
        </div>
        
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-[300px]">
          {messages.map((message, index) => (
            <div 
              key={index}
              className={cn(
                "p-2 rounded-lg max-w-[85%] text-sm",
                message.isUser 
                  ? "bg-cyber-blue text-white ml-auto" 
                  : "bg-slate-800 text-slate-100"
              )}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Suggestions */}
        {messages.length <= 2 && (
          <div className="p-3 border-t border-slate-800">
            <p className="text-xs text-slate-400 mb-2">Suggested questions:</p>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <button 
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="flex items-center gap-2 text-xs w-full p-2 rounded-md hover:bg-slate-800 text-left text-slate-300"
                >
                  <ChevronRight size={12} className="text-cyber-blue" />
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Input area */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-slate-800 flex gap-2">
          <input
            type="text"
            placeholder="Ask a security question..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyber-blue"
          />
          <button 
            type="submit"
            className="bg-cyber-blue text-white p-2 rounded-md hover:bg-blue-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default AIAssistant;
