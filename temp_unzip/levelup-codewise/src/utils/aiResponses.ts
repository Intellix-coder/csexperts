
import { programmingConcepts } from './responses/programmingConcepts';
import { basicPrograms } from './responses/programming/basicPrograms';
import { algorithms } from './responses/programming/algorithms';
import { universityPrograms } from './responses/universityPrograms';
import { sqlExamples } from './responses/sqlExamples';
import { mentalHealthResponses } from './responses/mentalHealthSupport';
import { networkingConcepts } from './responses/computerScience/networking';
import { flowchartExamples } from './responses/computerScience/flowcharts';
import { getNetworkingResponses } from './responses/computerScience/networking';
import { getFlowchartResponses } from './responses/computerScience/flowcharts';
import { getAlgorithmResponses } from './responses/programming/algorithms';
import { getBasicProgramResponses } from './responses/programming/basicPrograms';
import { getMentalHealthSupport } from './responses/mentalHealthSupport';
import { getPracticalExamples } from './responses/practicalExamples';
import { getSQLExamples } from './responses/sqlExamples';
import { getUniversityPrograms } from './responses/universityPrograms';

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

const greetings = [
  "Hello! I'm Mbuya Zivai, your tech career and Computer Science guide. How can I assist you today?",
  "Welcome! I'm here to help with your tech career path and Computer Science studies.",
  "Greetings! Need guidance on tech careers or Computer Science? I'm here to help!",
];

export const generateGreeting = (): string => {
  return greetings[Math.floor(Math.random() * greetings.length)];
};

export const generateResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes('tinodaishe') || lowerInput.includes('contact') || lowerInput.includes('email')) {
    return "You can contact Tinodaishe Chibi at tinodaishemchibi@gmail.com. He's our lead mentor for A Level Computer Science students.";
  }

  if (lowerInput.includes('career') || lowerInput.includes('degree') || lowerInput.includes('university')) {
    return getUniversityPrograms(input);
  }

  if (lowerInput.includes('mental') || lowerInput.includes('stress') || lowerInput.includes('anxiety')) {
    return getMentalHealthSupport(input);
  }

  if (lowerInput.includes('download') || lowerInput.includes('paper') || lowerInput.includes('past paper')) {
    return "You can find past papers in our Downloads section. We have papers from 2015 to 2023 for both Theory (Paper 1) and Practical (Paper 2).";
  }

  const responses = [
    getNetworkingResponses(input),
    getFlowchartResponses(input),
    getAlgorithmResponses(input),
    getBasicProgramResponses(input),
    ...getPracticalExamples(input),
    ...getSQLExamples(input)
  ].flat();

  return responses.length > 0 
    ? responses[0] 
    : "I'm here to help with tech career guidance, Computer Science concepts, and provide mental health support. Feel free to ask specific questions!";
};
