import { getNetworkingResponses } from './responses/computerScience/networking';
import { getMentalHealthSupport } from './responses/mentalHealthSupport';
import { getUniversityPrograms } from './responses/universityPrograms';

// Basic greeting phrases that can be randomly selected
const greetings = [
  "Hello! I'm Mbuya Zivai, your tech career and A Level Computer Science guide. How can I assist you today?",
  "Welcome! I'm here to help with your A Level Computer Science studies and tech career path.",
  "Greetings! Need guidance on Computer Science concepts or career advice? I'm here to help!",
];

// Common misspellings correction map
const correctSpelling = (input: string): string => {
  const commonMisspellings: Record<string, string> = {
    'programing': 'programming',
    'flowchart': 'flowchart',
    'databse': 'database',
    'javascript': 'JavaScript',
    'python': 'Python',
    'sql': 'SQL',
  };

  return input.split(' ').map(word => {
    const lowerWord = word.toLowerCase();
    return commonMisspellings[lowerWord] || word;
  }).join(' ');
};

// Generate random greeting
export const generateGreeting = (): string => {
  return greetings[Math.floor(Math.random() * greetings.length)];
};

// Main response function that determines what type of response to generate
export const generateResponse = (input: string): string => {
  // Correct any common misspellings in the input
  const correctedInput = correctSpelling(input);
  const lowerInput = correctedInput.toLowerCase();

  // Check for specific information about Tinodaishe or contact details
  if (lowerInput.includes('tinodaishe') || lowerInput.includes('contact') || lowerInput.includes('email')) {
    return "You can contact Tinodaishe M Chibi through Facebook (Chibi M Tinodaishe), LinkedIn (www.linkedin.com/in/tinodaishe-chibi), or WhatsApp (0781081816). He's our lead mentor for A Level Computer Science students.";
  }

  // Check for university or career guidance requests
  if (lowerInput.includes('career') || lowerInput.includes('degree') || lowerInput.includes('university')) {
    return getUniversityPrograms(correctedInput);
  }

  // Check for mental health support requests
  if (lowerInput.includes('mental') || lowerInput.includes('stress') || lowerInput.includes('anxiety') || 
      lowerInput.includes('depression') || lowerInput.includes('overwhelmed')) {
    return getMentalHealthSupport(correctedInput);
  }

  // Check for download related questions
  if (lowerInput.includes('download') || lowerInput.includes('paper') || lowerInput.includes('past paper')) {
    return "You can find past papers in our Downloads section. We have papers from 2015 to 2023 for both Theory (Paper 1) and Practical (Paper 2). You'll also find programming notes and career guidance documents there.";
  }

  // Check for information about the website
  if (lowerInput.includes('website') || lowerInput.includes('about this site')) {
    return "This website is a platform for A Level Computer Science students in Zimbabwe. We provide past papers, programming resources, career guidance, and technical support through our AI assistant, Mbuya Zivai. Our goal is to empower students with knowledge and skills needed for success in Computer Science.";
  }

  // Check for networking concepts
  const networkingResponses = getNetworkingResponses(correctedInput);
  if (networkingResponses.length > 0) {
    return networkingResponses[0];
  }
  
  // Default response if no specific pattern is matched
  return "I'm here to help with A Level Computer Science concepts, provide technical guidance, offer career advice, and support your mental well-being. Feel free to ask specific questions about networking, programming, university programs, or any other Computer Science topic!";
};

// Fallback response when something goes wrong
export const getFallbackResponse = (message: string): string => {
  return `I apologize, but I'm having trouble understanding your request or accessing the necessary information to provide a helpful response. Could you please try rephrasing your question or ask about another topic related to Computer Science, career guidance, or A Level studies? If the issue persists, it might be a technical problem with my system.`;
};