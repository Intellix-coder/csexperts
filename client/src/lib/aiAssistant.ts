import { apiRequest } from "./queryClient";

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface AIResponse {
  text: string;
  action?: {
    type: 'navigate' | 'downloadFile' | 'none';
    target?: string;
  };
}

export const defaultMessages: Message[] = [
  {
    role: 'assistant',
    content: `Hello! I'm Mbuty Zivai, your AI assistant. I can help with:
    
- Computer science concepts
- Programming questions
- Career advice
- Mental support
- Website navigation

How can I assist you today?`
  }
];

export async function sendMessageToAI(messages: Message[]): Promise<AIResponse> {
  try {
    const response = await apiRequest('POST', '/api/ai/chat', { messages });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error communicating with AI service:', error);
    return {
      text: "I'm sorry, I'm having trouble connecting to my knowledge base. Please try again later.",
      action: { type: 'none' }
    };
  }
}

// Fallback logic in case backend is not available
export function getFallbackResponse(message: string): AIResponse {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return {
      text: "Hello there! How can I help you with your computer science studies today?",
      action: { type: 'none' }
    };
  } 
  else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('developer')) {
    return {
      text: "You can reach the developer, Tinodaishe M Chibi, at +263 78 108 1816 or via email at tinodaishemchibi@gmail.com.",
      action: { type: 'none' }
    };
  }
  else if (lowerMessage.includes('downloads') || lowerMessage.includes('resources') || lowerMessage.includes('papers')) {
    const shouldNavigate = lowerMessage.includes('take me') || lowerMessage.includes('navigate') || lowerMessage.includes('go to');
    
    return {
      text: "Our downloads page contains past papers for both Theory (Paper 1) and Practical (Paper 2) from 2015 to 2023.",
      action: shouldNavigate ? { type: 'navigate', target: 'downloads' } : { type: 'none' }
    };
  }
  else if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('work')) {
    return {
      text: "Computer Science offers many career paths including software development, data science, cybersecurity, and AI research. What specific area are you interested in learning more about?",
      action: { type: 'none' }
    };
  }
  else if (lowerMessage.includes('programming') || lowerMessage.includes('code') || lowerMessage.includes('coding')) {
    return {
      text: "For programming questions, I recommend starting with the fundamentals of algorithms and data structures. Is there a specific programming concept or language you're struggling with?",
      action: { type: 'none' }
    };
  }
  else if (lowerMessage.includes('stress') || lowerMessage.includes('anxiety') || lowerMessage.includes('overwhelmed')) {
    return {
      text: "It's normal to feel stressed with studies sometimes. Try breaking down your work into smaller tasks, practice mindfulness, and remember to take breaks. Would you like some specific study techniques to help manage stress?",
      action: { type: 'none' }
    };
  }
  else {
    return {
      text: "Thank you for your message. I'm here to help with Computer Science concepts, career advice, programming questions, or website navigation. Could you please provide more details about what you need help with?",
      action: { type: 'none' }
    };
  }
}
