export interface UniversityProgram {
  name: string;
  description: string;
  universities: string[];
  careers: string[];
}

export const universityPrograms: Record<string, UniversityProgram> = {
  "computer_science": {
    name: "Computer Science",
    description: "Computer Science is the study of computers and computational systems. It involves theoretical studies of algorithms and practical application in software development.",
    universities: [
      "University of Zimbabwe",
      "National University of Science and Technology (NUST)",
      "Harare Institute of Technology (HIT)",
      "Chinhoyi University of Technology (CUT)",
      "Midlands State University (MSU)"
    ],
    careers: [
      "Software Developer",
      "Systems Analyst",
      "Data Scientist",
      "Web Developer",
      "Software Engineer",
      "Machine Learning Engineer"
    ]
  },
  "information_technology": {
    name: "Information Technology",
    description: "Information Technology focuses on the application of technology to solve business and organizational problems. It includes network management, system administration, and user support.",
    universities: [
      "University of Zimbabwe",
      "Bindura University of Science Education",
      "Harare Institute of Technology",
      "Midlands State University",
      "Great Zimbabwe University"
    ],
    careers: [
      "IT Support Specialist",
      "Network Administrator",
      "Systems Administrator",
      "IT Project Manager",
      "Database Administrator",
      "IT Consultant"
    ]
  },
  "software_engineering": {
    name: "Software Engineering",
    description: "Software Engineering is focused on developing and maintaining software systems. It emphasizes engineering principles for software development, including specification, design, and testing.",
    universities: [
      "Harare Institute of Technology",
      "National University of Science and Technology",
      "Chinhoyi University of Technology"
    ],
    careers: [
      "Software Engineer",
      "Systems Architect",
      "Quality Assurance Engineer",
      "DevOps Engineer",
      "Mobile App Developer",
      "Full-Stack Developer"
    ]
  },
  "artificial_intelligence": {
    name: "Artificial Intelligence",
    description: "Artificial Intelligence focuses on creating systems that can perform tasks that typically require human intelligence. This includes machine learning, natural language processing, and computer vision.",
    universities: [
      "University of Zimbabwe",
      "National University of Science and Technology"
    ],
    careers: [
      "AI Researcher",
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Ethics Consultant",
      "Computer Vision Engineer",
      "NLP Specialist"
    ]
  },
  "cyber_security": {
    name: "Cyber Security",
    description: "Cyber Security focuses on protecting computer systems, networks, and data from digital attacks, unauthorized access, and information disclosure.",
    universities: [
      "Harare Institute of Technology",
      "National University of Science and Technology",
      "University of Zimbabwe"
    ],
    careers: [
      "Security Analyst",
      "Ethical Hacker",
      "Security Engineer",
      "Security Consultant",
      "Forensic Computer Analyst",
      "Chief Information Security Officer"
    ]
  }
};

export const getUniversityPrograms = (input: string): string => {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('computer science') || (lowerInput.includes('computer') && lowerInput.includes('science'))) {
    const program = universityPrograms.computer_science;
    return formatProgramResponse(program);
  }
  
  if (lowerInput.includes('information technology') || lowerInput.includes('it degree')) {
    const program = universityPrograms.information_technology;
    return formatProgramResponse(program);
  }
  
  if (lowerInput.includes('software engineering') || lowerInput.includes('software engineer')) {
    const program = universityPrograms.software_engineering;
    return formatProgramResponse(program);
  }
  
  if (lowerInput.includes('artificial intelligence') || lowerInput.includes('ai degree') || lowerInput.includes('machine learning')) {
    const program = universityPrograms.artificial_intelligence;
    return formatProgramResponse(program);
  }
  
  if (lowerInput.includes('cyber security') || lowerInput.includes('cybersecurity') || lowerInput.includes('information security')) {
    const program = universityPrograms.cyber_security;
    return formatProgramResponse(program);
  }
  
  if (lowerInput.includes('degree') || lowerInput.includes('career') || lowerInput.includes('university')) {
    return `Here are some popular Computer Science related degree programs available in Zimbabwe:
    
- Computer Science: Theoretical and practical aspects of computing
- Information Technology: Applied technology for business solutions
- Software Engineering: Systematic development of software
- Artificial Intelligence: Creating intelligent systems
- Cyber Security: Protecting systems from digital threats

For detailed information about any of these programs, just ask about the specific degree program you're interested in!`;
  }
  
  return "I can provide information about various degree programs in Computer Science and related fields in Zimbabwe. If you're interested in learning about specific programs like Computer Science, Information Technology, Software Engineering, AI, or Cyber Security, please let me know!";
};

function formatProgramResponse(program: UniversityProgram): string {
  return `${program.name}
  
${program.description}

**Universities offering this program in Zimbabwe:**
${program.universities.map(uni => `- ${uni}`).join('\n')}

**Potential Career Paths:**
${program.careers.map(career => `- ${career}`).join('\n')}

Would you like more information about admission requirements or any other specific aspects of this program?`;
};