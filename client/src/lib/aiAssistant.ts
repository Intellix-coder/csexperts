import { apiRequest } from "./queryClient";
import { generateGreeting, generateResponse, getFallbackResponse as getLocalFallbackResponse } from "../utils/aiResponses";

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
    content: generateGreeting()
  }
];

export async function sendMessageToAI(messages: Message[]): Promise<AIResponse> {
  try {
    // Get the last message from the user
    const lastMessage = messages[messages.length - 1];
    
    if (lastMessage.role !== 'user') {
      throw new Error('Last message must be from user');
    }
    
    // Generate local response using our knowledge base
    const response = processLocalRequest(lastMessage.content);
    
    // For navigation intentions, detect and apply navigation actions
    const lowerMessage = lastMessage.content.toLowerCase();
    const action = determineAction(lowerMessage);
    
    return {
      text: response,
      action: action
    };
    
    // Previously we used the backend API, but now we're using local knowledge base
    // If you want to switch back to using the API, uncomment the code below:
    /*
    const response = await apiRequest('POST', '/api/ai/chat', { messages });
    const data = await response.json();
    return data;
    */
  } catch (error) {
    console.error('Error processing AI request:', error);
    return getFallbackResponse(messages[messages.length - 1]?.content || "");
  }
}

// Local knowledge base processing
function processLocalRequest(userMessage: string): string {
  return generateResponse(userMessage);
}

// Determine if any navigation or special action is needed
function determineAction(message: string): { type: 'navigate' | 'downloadFile' | 'none'; target?: string } {
  // Check for navigation intentions
  if (message.includes('take me to') || message.includes('go to') || message.includes('show me')) {
    if (message.includes('download') || message.includes('papers') || message.includes('resources')) {
      return { type: 'navigate', target: '/downloads' };
    }
    if (message.includes('about') || message.includes('who made')) {
      return { type: 'navigate', target: '/about' };
    }
    if (message.includes('contact') || message.includes('reach out')) {
      return { type: 'navigate', target: '/contact' };
    }
    if (message.includes('home') || message.includes('main page')) {
      return { type: 'navigate', target: '/' };
    }
  }
  
  // Check for download requests
  if (message.includes('download') && message.includes('career')) {
    return { type: 'downloadFile', target: 'https://www.mediafire.com/file/kb46j9vnui3j1y3/degree-programmes-offered-and-careers.pdf/file' };
  }
  
  return { type: 'none' };
}

// Fallback logic in case local knowledge base processing fails
export function getFallbackResponse(message: string): AIResponse {
  return {
    text: getLocalFallbackResponse(message),
    action: { type: 'none' }
  };
}
