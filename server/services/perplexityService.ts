import { AIMessage, AIResponse } from '@shared/types';

/**
 * Service for Perplexity AI API integration
 * This provides a more capable AI backend service
 */
export class PerplexityService {
  private apiKey: string | undefined;
  private modelName = 'llama-3.1-sonar-small-128k-online';
  private apiEndpoint = 'https://api.perplexity.ai/chat/completions';
  
  constructor() {
    this.apiKey = process.env.PERPLEXITY_API_KEY;
    
    // Log initialization state for troubleshooting
    if (!this.apiKey) {
      console.warn('WARNING: PerplexityService initialized without API key, will use fallback responses');
    } else {
      console.log('PerplexityService initialized successfully');
    }
  }
  
  /**
   * Get AI response using the Perplexity API
   */
  async getAIResponse(messages: AIMessage[]): Promise<AIResponse> {
    // If no API key is available, return a fallback response
    if (!this.apiKey) {
      return this.getFallbackResponse(messages[messages.length - 1].content);
    }
    
    try {
      // Create the system message prompt to guide AI responses
      const systemMessage = {
        role: "system",
        content: `You are Mbuya Zivai, an educational AI assistant for CS Experts, a platform dedicated to helping students excel in A Level Computer Science.
          
Provide helpful, educational responses focused on:
1. Computer Science topics (programming, theory, data structures, algorithms)
2. Career guidance for technology fields
3. University course recommendations
4. Academic support and study strategies
5. Mental health support for students

Your responses should be:
- Educational and accurate
- Easy to understand for students
- Supportive and encouraging
- Focused on A Level Computer Science material

IMPORTANT: You should NOT:
- Provide responses unrelated to education or student support
- Give harmful advice
- Share inappropriate content

For university program questions, focus on computer science, software engineering, and IT-related degrees.
For mental health questions, provide supportive advice and suggest students talk to qualified professionals.`
      };
      
      // Configure the API request
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: this.modelName,
          messages: [
            systemMessage,
            ...messages
          ],
          temperature: 0.7,
          max_tokens: 800,
          top_p: 0.9,
        })
      });
      
      // Handle API response
      if (!response.ok) {
        console.error('Perplexity API error:', response.status, await response.text());
        return this.getFallbackResponse(messages[messages.length - 1].content);
      }
      
      const data = await response.json();
      const responseText = data.choices[0].message.content;
      
      // Determine if there's an action in the response
      return {
        text: responseText,
        action: this.determineAction(responseText)
      };
      
    } catch (error) {
      console.error('Error calling Perplexity API:', error);
      return this.getFallbackResponse(messages[messages.length - 1].content);
    }
  }
  
  /**
   * Determine if there's an action to take based on the AI response
   */
  private determineAction(text: string): { type: 'navigate' | 'downloadFile' | 'none'; target?: string } {
    // Check for navigation intent in the response
    if (
      text.includes('visit the Downloads page') || 
      text.includes('check our Downloads section') ||
      text.includes('go to the Downloads page')
    ) {
      return { type: 'navigate', target: '/downloads' };
    }
    
    // Check for download intent in the response
    if (
      text.includes('download this file') ||
      text.includes('download the following resource') ||
      text.includes('download this resource')
    ) {
      // Extract URL from text if present
      const urlMatch = text.match(/https?:\/\/[^\s)]+/);
      if (urlMatch) {
        return { type: 'downloadFile', target: urlMatch[0] };
      }
    }
    
    // Default: no action
    return { type: 'none' };
  }
  
  /**
   * Provide a fallback response when the API is unavailable
   */
  private getFallbackResponse(message: string): AIResponse {
    let response = "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later or check the Downloads page for resources that might help with your question.";
    
    // Simple keyword-based fallback
    if (message.toLowerCase().includes('download') || message.toLowerCase().includes('resource')) {
      response = "You can find all our resources on the Downloads page, including programming guides, theory papers, and practical examples.";
      return {
        text: response,
        action: { type: 'navigate', target: '/downloads' }
      };
    }
    
    return {
      text: response,
      action: { type: 'none' }
    };
  }
}

// Export a singleton instance
export const perplexityService = new PerplexityService();