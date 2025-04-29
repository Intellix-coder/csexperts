import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { 
  Message, 
  defaultMessages, 
  sendMessageToAI, 
  getFallbackResponse
} from "@/lib/aiAssistant";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(defaultMessages);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [, setLocation] = useLocation();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, messages]);

  const handleSendMessage = async () => {
    const userMessage = inputValue.trim();
    if (!userMessage || isProcessing) return;

    // Add user message to chat
    const updatedMessages = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(updatedMessages);
    setInputValue("");
    setIsProcessing(true);

    try {
      // Send to AI and get response
      const response = await sendMessageToAI(updatedMessages);
      
      // Handle any actions from the response
      if (response.action?.type === 'navigate' && response.action.target) {
        setTimeout(() => {
          setLocation(`/${response.action!.target}`);
        }, 1000);
      }

      // Add AI response to chat
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.text },
      ]);
    } catch (error) {
      console.error("Error processing message:", error);
      
      // Use fallback logic if API fails
      const fallbackResponse = getFallbackResponse(userMessage);
      
      // Handle navigation in fallback
      if (fallbackResponse.action?.type === 'navigate' && fallbackResponse.action.target) {
        setTimeout(() => {
          setLocation(`/${fallbackResponse.action!.target}`);
        }, 1000);
      }
      
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: fallbackResponse.text },
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {/* AI Chat Window */}
      {isOpen && (
        <div className="w-[320px] md:w-[380px] bg-card border border-border rounded-xl shadow-xl overflow-hidden mb-4 flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <i className="fas fa-robot text-white"></i>
                </div>
                <h3 className="font-bold text-white">Mbuty Zivai</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-gray-200 hover:bg-white/10"
                onClick={toggleChat}
              >
                <i className="fas fa-times"></i>
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 h-[320px] py-4">
            <div className="px-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start ${
                    message.role === "user" ? "justify-end" : ""
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="fas fa-robot text-white text-xs"></i>
                    </div>
                  )}

                  <div
                    className={`rounded-lg p-3 max-w-[85%] ${
                      message.role === "user"
                        ? "bg-accent/20"
                        : "bg-secondary"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center ml-3 flex-shrink-0">
                      <i className="fas fa-user text-white text-xs"></i>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <div className="p-3 border-t border-border bg-secondary/60">
            <div className="flex items-center">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-card"
                disabled={isProcessing}
              />
              <Button
                className="ml-2 bg-accent hover:bg-accent-hover rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0"
                onClick={handleSendMessage}
                disabled={isProcessing}
                aria-label="Send message"
              >
                <i className="fas fa-paper-plane text-white"></i>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* AI Button */}
      <Button
        onClick={toggleChat}
        className={`w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg ${
          isOpen ? "" : "pulse-button"
        }`}
        aria-label="Toggle AI assistant"
      >
        <i className="fas fa-robot text-white text-2xl"></i>
      </Button>
    </div>
  );
};

export default AIAssistant;
