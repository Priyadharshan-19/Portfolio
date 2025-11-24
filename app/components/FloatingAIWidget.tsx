"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import { Send, Loader, Zap, MessageSquare, X } from 'lucide-react'; // Icons for chat UI
import ReactMarkdown from 'react-markdown'; // <--- NEW IMPORT
import remarkGfm from 'remark-gfm'; // <--- NEW IMPORT

// Configuration for the Gemini API call
// API KEY IS NOW INSERTED DIRECTLY
const API_KEY = "AIzaSyATHctptVAnKpBZuUAgch7uNfmbEmqTyk0"; 
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent";

// System instruction to guide the AI's persona
const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for Priya Dharshan M, a skilled student developer specializing in Generative AI, Stock Market Tech, and IoT Edge Computing. Your goal is to answer user questions politely, accurately, and based only on the expertise listed below.

Priya Dharshan M's Key Skills and Learning Focus:
1. Generative AI & advanced ML for creative apps
2. Stock market technology and algorithmic trading
3. Edge computing with smart IoT data workflows
4. Full-stack development (Flask, Python)
5. IoT (Sensors, Cloud Triggers, ESP32)
6. Projects: VisionGuard-AI (adversarial detection), Smart Canteen Token Queue System, Flood Detection Detection System, Blockchain-Based Blue Carbon Registry.

Keep responses concise and professional. Do not invent skills or information. Do not mention "Hire Me" or any job solicitation, focus only on technical inquiries.
`;

export default function FloatingAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: 'model', text: "Hello! I'm Priya Dharshan's assistant. Ask me about Priya's technical skills, projects, or learning focuses!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Ref to the chat history container for auto-scrolling
  const chatHistoryRef = useRef<HTMLDivElement>(null); 

  // --- AUTOSCROLL EFFECT ---
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);


  // --- API LOGIC (Omitted for brevity, unchanged) ---
  const sendMessage = async (userQuery: string) => {
    // Check if key is missing (though it shouldn't be now)
    if (!API_KEY) {
      setChatHistory(prevHistory => [
        ...prevHistory, 
        { 
          role: 'model', 
          text: "❌ API Key Missing. Please insert your key directly into the 'API_KEY' variable in FloatingAIWidget.tsx."
        }
      ]);
      return;
    }


    if (!userQuery.trim() || isLoading) return;

    const newUserMessage = { role: 'user', text: userQuery };
    const updatedHistory = [...chatHistory, newUserMessage];
    setChatHistory(updatedHistory);
    setInput('');
    setIsLoading(true);

    // Map chat history into the format required by the Gemini API
    const contents = updatedHistory.map(msg => ({ 
        role: msg.role === 'model' ? 'model' : 'user', 
        parts: [{ text: msg.text }] 
    }));
    
    const payload = {
      contents: contents,
      systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] }
    };

    const MAX_RETRIES = 5;
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        try {
            // Use the API_KEY inserted directly into the component
            const keyParam = `?key=${API_KEY}`;

            const response = await fetch(API_URL + keyParam, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`HTTP Error ${response.status}: ${errorBody}`);
            }

            const result = await response.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that request.";

            setChatHistory(prevHistory => [...prevHistory, { role: 'model', text: text }]);
            setIsLoading(false);
            return; // Exit on success

        } catch (error) {
            console.error("Attempt failed:", attempt, error);

            if (attempt === MAX_RETRIES - 1) {
                setChatHistory(prevHistory => [...prevHistory, { role: 'model', text: "❌ Internal Error: I failed to connect to the AI service. Check your console for details (possible API key or network issue)." }]);
                setIsLoading(false);
                return; // Exit after max retries
            }
            // Exponential backoff delay (1s, 2s, 4s, 8s, 16s...)
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage(input);
    }
  };

  // --- UI RENDERING ---

  return (
    <>
      {/* 1. Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-40 p-3 rounded-full bg-neon text-slate-950 shadow-2xl hover:scale-105 transition-transform"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>

      {/* 2. Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-20 right-6 z-50 w-full max-w-sm h-[80vh] max-h-[500px] rounded-2xl shadow-2xl overflow-hidden bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 bg-slate-800/80 border-b border-slate-700">
              <h3 className="text-sm font-semibold text-slate-100 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-accent" />
                Chat with Priya Dharshan
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Chat History Area - Scrollable Content */}
            <div 
              ref={chatHistoryRef} // Reference for auto-scrolling
              className="flex-1 overflow-y-auto space-y-4 p-4 text-xs scrollbar-thin scrollbar-thumb-accent scrollbar-track-slate-900"
            >
              {chatHistory.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[90%] p-3 rounded-xl shadow-md ${
                      msg.role === 'user'
                        ? 'bg-neon/90 text-slate-950 rounded-br-none font-medium'
                        : 'bg-slate-700/80 text-slate-100 rounded-tl-none prose prose-sm prose-invert' // <--- ADDED PROSE AND INVERT FOR STYLING
                    }`}
                  >
                    {/* NEW: Use ReactMarkdown to render the text with correct formatting */}
                    <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        children={msg.text} 
                    /> 
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-3 rounded-xl bg-slate-700/80 text-slate-100 rounded-tl-none flex items-center">
                    <Loader className="w-4 h-4 mr-2 animate-spin text-accent" />
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Input Field and Send Button */}
            <div className="p-4 border-t border-slate-700/50">
              <div className="relative flex items-center">
                <Zap className="w-4 h-4 text-accent absolute left-3 opacity-60" />
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="w-full rounded-full border border-slate-700/80 bg-slate-800/60 pl-10 pr-12 py-3 text-sm text-slate-200 outline-none focus:border-neon transition disabled:opacity-70"
                  placeholder="Ask me anything about Priya..."
                />
                <motion.button
                  onClick={() => sendMessage(input)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 rounded-full bg-accent text-slate-950 disabled:bg-slate-700/50 transition"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}