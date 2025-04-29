import { AIMessage, AIResponse } from "@shared/types";
import { perplexityService } from './perplexityService';

/**
 * Enhanced AI Service using local knowledge base
 * This service focuses on providing educational responses without requiring external AI APIs
 */
class AIService {
  // Site information for use in responses
  private siteInfo = {
    founder: "Tinodaishe M Chibi",
    contact: {
      phone: "+263 78 108 1816",
      email: "tinodaishemchibi@gmail.com",
      whatsapp: "+263 78 108 1816", // Updated to match the actual number
      facebook: "Chibi M Tinodaishe",
      linkedin: "www.linkedin.com/in/tinodaishe-chibi"
    },
    downloadCategories: [
      "Programming Notes",
      "Theory Papers (2015-2023)",
      "Practical Papers (2015-2023)",
      "Special Topics"
    ]
  };

  /**
   * Get AI response from either Perplexity AI (if available) or local knowledge base
   */
  async getAIResponse(messages: AIMessage[]): Promise<AIResponse> {
    try {
      // If Perplexity API key is available, use it for enhanced AI capabilities
      if (process.env.PERPLEXITY_API_KEY) {
        return await perplexityService.getAIResponse(messages);
      }
      
      // Otherwise, use our local knowledge base
      return this.getLocalResponse(messages[messages.length - 1].content);
    } catch (error) {
      console.error("Error generating AI response:", error);
      
      // Fallback to local knowledge base if any error occurs
      return this.getLocalResponse(messages[messages.length - 1].content);
    }
  }
  
  /**
   * Generate responses using our local knowledge base modules
   */
  private async getLocalResponse(userMessage: string): Promise<AIResponse> {
    // Convert to lowercase for easier matching
    const message = userMessage.toLowerCase();
    
    // Dynamically import and use our specialized response modules based on message content
    
    // Mental health support
    if (this.containsAny(message, ['stress', 'anxiety', 'depression', 'mental health', 'overwhelmed', 'tired', 'exhausted', 'worried'])) {
      const { getMentalHealthSupport } = await import('../../client/src/utils/responses/mentalHealthSupport');
      return {
        text: getMentalHealthSupport(message),
        action: { type: 'none' }
      };
    }
    
    // University programs and career guidance
    if (this.containsAny(message, ['university', 'college', 'degree', 'program', 'course', 'career', 'job', 'profession'])) {
      const { getUniversityPrograms } = await import('../../client/src/utils/responses/universityPrograms');
      return {
        text: getUniversityPrograms(message),
        action: { type: 'none' }
      };
    }
    
    // Computer science topics and programming
    if (this.containsAny(message, ['programming', 'code', 'algorithm', 'data structure', 'python', 'java', 'javascript', 'c++', 'database'])) {
      // Attempt to load a more specific module based on keywords
      try {
        if (message.includes('networking') || message.includes('network')) {
          const networkingModule = await import('../../client/src/utils/responses/computerScience/networking');
          return {
            text: networkingModule.getNetworkingResponse(message),
            action: { type: 'none' }
          };
        }
        
        // Add more specialized topics as they become available
        
      } catch (error) {
        // If specialized module fails, fall back to general programming response
        return this.getProgrammingResponse(message);
      }
    }
    
    // Website navigation and downloads
    if (this.containsAny(message, ['download', 'resource', 'paper', 'note', 'find', 'navigation', 'menu'])) {
      return this.getNavigationResponse(message);
    }
    
    // Contact information
    if (this.containsAny(message, ['contact', 'phone', 'email', 'reach', 'tinodaishe', 'developer', 'creator', 'whatsapp', 'facebook'])) {
      return this.getContactResponse(message);
    }
    
    // Greetings
    if (this.containsAny(message, ['hello', 'hi', 'hey', 'greetings', 'howdy', 'hola'])) {
      return this.getGreetingResponse();
    }
    
    // Default response for unrecognized queries
    return this.getDefaultResponse();
  }
  
  /**
   * Check if a message contains any of the keywords
   */
  private containsAny(message: string, keywords: string[]): boolean {
    return keywords.some(keyword => message.includes(keyword));
  }
  
  /**
   * Get programming-related response
   */
  private getProgrammingResponse(message: string): AIResponse {
    // Simple keyword-based programming response logic
    const programmingResponses = [
      "Programming is about breaking down problems into logical steps. What specific aspect are you having trouble with?",
      "When learning to code, focus first on understanding core concepts like variables, loops, and functions before diving into complex algorithms.",
      "For A Level Computer Science, I recommend focusing on understanding algorithms and data structures as they form the foundation of programming.",
      "Are you looking for help with a specific programming language or concept? I can provide guidance on Python, Java, JavaScript and other languages covered in A Level Computer Science."
    ];
    
    // Return a random response from our options
    const responseText = programmingResponses[Math.floor(Math.random() * programmingResponses.length)];
    
    return {
      text: responseText,
      action: { type: 'none' }
    };
  }
  
  /**
   * Get site navigation response
   */
  private getNavigationResponse(message: string): AIResponse {
    // Check for navigation intent
    const navigateToDownloads = message.includes('downloads') || 
                               message.includes('papers') || 
                               message.includes('resources') ||
                               (message.includes('go to') && message.includes('download'));
    
    if (navigateToDownloads) {
      return {
        text: `Our Downloads page contains valuable resources including:
- Programming Notes covering core A Level topics
- Theory Papers (Paper 1) from 2015-2023
- Practical Papers (Paper 2) from 2015-2023
- Special Topics with additional learning materials

Would you like me to take you to the Downloads page?`,
        action: { type: 'navigate', target: '/downloads' }
      };
    }
    
    // Otherwise provide general navigation info
    return {
      text: `The CS Experts website has several main sections:
- Home: Overview of our services and latest updates
- About: Information about Tinodaishe M Chibi and the CS Experts platform
- Downloads: Access to programming notes, past papers, and learning resources
- Contact: Forms to get in touch with our team

How can I help you navigate to what you're looking for?`,
      action: { type: 'none' }
    };
  }
  
  /**
   * Get contact information response
   */
  private getContactResponse(message: string): AIResponse {
    return {
      text: `You can reach Tinodaishe M Chibi, the founder of CS Experts, through:

- Phone/WhatsApp: ${this.siteInfo.contact.phone}
- Email: ${this.siteInfo.contact.email}
- Facebook: ${this.siteInfo.contact.facebook}
- LinkedIn: ${this.siteInfo.contact.linkedin}

Is there something specific you'd like to discuss with him?`,
      action: { type: 'none' }
    };
  }
  
  /**
   * Get greeting response
   */
  private getGreetingResponse(): AIResponse {
    const greetings = [
      "Hello! I'm Mbuya Zivai, your CS Experts assistant. How can I help with your Computer Science studies today?",
      "Greetings! I'm here to help with A Level Computer Science topics, career advice, or website navigation. What do you need assistance with?",
      "Hi there! I'm Mbuya Zivai, your educational AI assistant. How can I support your learning journey today?"
    ];
    
    return {
      text: greetings[Math.floor(Math.random() * greetings.length)],
      action: { type: 'none' }
    };
  }
  
  /**
   * Get default response for unrecognized queries
   */
  private getDefaultResponse(): AIResponse {
    return {
      text: "Thank you for your message. I'm here to help with A Level Computer Science concepts, career advice, programming questions, or website navigation. Could you please provide more details about what you need help with?",
      action: { type: 'none' }
    };
  }
}

export const aiService = new AIService();