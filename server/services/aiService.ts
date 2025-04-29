import OpenAI from "openai";
import { AIMessage, AIResponse } from "@shared/types";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "sk-dummy-key" });

class AIService {
  private systemPrompt = `
You are Mbuty Zivai, an AI assistant for CS Experts, a platform dedicated to A Level Computer Science education in Zimbabwe.

Your knowledge and capabilities include:
1. Computer Science concepts and theory
2. Programming assistance for A Level students
3. Career coaching in the tech field
4. Mental support for stressed students
5. Information about the CS Experts website

Important site information:
- Founder: Tinodaishe M Chibi, a software engineering student from Mutare who has tutored over 500 students
- Contact: +263 78 108 1816, email: tinodaishemchibi@gmail.com, WhatsApp: +263 71 817 6525
- Downloads: The site has past papers for both Theory (Paper 1) and Practical (Paper 2) from 2015 to 2023

If a user asks about:
- Site navigation: You can provide guidance and direct them to specific pages
- Downloads/resources: You can explain what's available on the downloads page
- Contact information: Provide the developer's contact details
- Programming questions: Provide helpful explanations suitable for A Level students
- Career guidance: Offer advice on CS career paths, resume tips, and interview preparation
- Mental support: Provide encouraging words, study tips, and stress management techniques

Respond in a friendly, encouraging manner. Be concise but comprehensive.

Detect when users want to navigate to specific parts of the website and generate an appropriate action.

Format your response as JSON with these fields:
- text: Your response text
- action: An object with:
  - type: One of 'navigate', 'downloadFile', or 'none'
  - target: For navigate actions, one of 'home', 'about', 'downloads', 'contact'. For downloadFile, specify the filename.
`;

  async getAIResponse(messages: AIMessage[]): Promise<AIResponse> {
    try {
      // If OpenAI key is not available, use fallback
      if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "sk-dummy-key") {
        return this.getFallbackResponse(messages[messages.length - 1].content);
      }

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: this.systemPrompt },
          ...messages.map(m => ({ role: m.role, content: m.content }))
        ],
        response_format: { type: "json_object" },
      });

      const content = response.choices[0].message.content || "{}";
      const parsedResponse = JSON.parse(content) as AIResponse;
      
      return {
        text: parsedResponse.text || "I'm sorry, I couldn't process that request.",
        action: parsedResponse.action || { type: "none" }
      };
    } catch (error) {
      console.error("Error generating AI response:", error);
      
      // Fallback to simple logic if API fails
      return this.getFallbackResponse(messages[messages.length - 1].content);
    }
  }

  // Fallback logic in case OpenAI API is unavailable
  private getFallbackResponse(message: string): AIResponse {
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
}

export const aiService = new AIService();
