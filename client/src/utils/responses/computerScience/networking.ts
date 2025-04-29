export interface NetworkingConcept {
  topic: string;
  explanation: string;
  examples: string[];
}

export const networkingConcepts: Record<string, NetworkingConcept> = {
  "osi_model": {
    topic: "OSI Model",
    explanation: "The OSI (Open Systems Interconnection) Model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven abstraction layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
    examples: [
      "Physical Layer: Ethernet cables, fiber optic cables",
      "Data Link Layer: MAC addresses, switches",
      "Network Layer: IP addresses, routers",
      "Transport Layer: TCP, UDP protocols",
      "Session Layer: Session establishment, management, and termination",
      "Presentation Layer: Data encryption, compression, and translation",
      "Application Layer: HTTP, FTP, SMTP protocols"
    ]
  },
  "tcp_ip": {
    topic: "TCP/IP Protocol",
    explanation: "The Transmission Control Protocol/Internet Protocol (TCP/IP) is a suite of communication protocols used to interconnect network devices on the internet. TCP provides reliable, ordered, and error-checked delivery of data, while IP handles the addressing and routing of packets.",
    examples: [
      "TCP ensures data packets arrive in order and without errors",
      "IP assigns unique addresses to devices and routes data packets",
      "HTTP, FTP, and SMTP are application protocols that run on top of TCP/IP",
      "The three-way handshake: SYN, SYN-ACK, ACK for establishing TCP connections"
    ]
  },
  "ip_addressing": {
    topic: "IP Addressing",
    explanation: "IP addressing is a logical addressing scheme used in IP networks. IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses. IP addresses are divided into network and host portions using subnet masks.",
    examples: [
      "IPv4 address example: 192.168.1.1",
      "IPv6 address example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334",
      "Private IP address ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16",
      "Subnet mask example: 255.255.255.0 (or /24 in CIDR notation)"
    ]
  },
  "routing": {
    topic: "Routing",
    explanation: "Routing is the process of selecting paths in a network along which to send network traffic. Routers use routing tables and protocols to determine the best path for forwarding packets.",
    examples: [
      "Static routing: Manually configured routes",
      "Dynamic routing: Routes automatically updated using protocols like RIP, OSPF, or BGP",
      "Default gateway: The router to which packets are sent when no specific route is known",
      "Routing table: Contains network destinations and their associated next hops"
    ]
  },
  "dns": {
    topic: "DNS (Domain Name System)",
    explanation: "DNS is a hierarchical decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It translates domain names to IP addresses.",
    examples: [
      "When you type www.example.com, DNS resolves it to the corresponding IP address",
      "DNS hierarchy: Root servers, TLD servers, Authoritative servers",
      "DNS record types: A (IPv4 address), AAAA (IPv6 address), MX (mail exchange), CNAME (canonical name)",
      "DNS caching improves performance by storing previously resolved queries"
    ]
  }
};

export const getNetworkingResponses = (input: string): string[] => {
  const lowerInput = input.toLowerCase();
  const responses: string[] = [];
  
  if (lowerInput.includes('osi model') || (lowerInput.includes('osi') && lowerInput.includes('layer'))) {
    const concept = networkingConcepts.osi_model;
    responses.push(formatNetworkingResponse(concept));
  }
  
  if (lowerInput.includes('tcp/ip') || lowerInput.includes('tcp') || lowerInput.includes('transmission control protocol')) {
    const concept = networkingConcepts.tcp_ip;
    responses.push(formatNetworkingResponse(concept));
  }
  
  if (lowerInput.includes('ip address') || lowerInput.includes('ipv4') || lowerInput.includes('ipv6')) {
    const concept = networkingConcepts.ip_addressing;
    responses.push(formatNetworkingResponse(concept));
  }
  
  if (lowerInput.includes('routing') || lowerInput.includes('router') || lowerInput.includes('route')) {
    const concept = networkingConcepts.routing;
    responses.push(formatNetworkingResponse(concept));
  }
  
  if (lowerInput.includes('dns') || lowerInput.includes('domain name system') || lowerInput.includes('domain name')) {
    const concept = networkingConcepts.dns;
    responses.push(formatNetworkingResponse(concept));
  }
  
  if (lowerInput.includes('network') && responses.length === 0) {
    responses.push("I can provide information on various networking concepts like the OSI Model, TCP/IP, IP Addressing, Routing, and DNS. Please specify which networking topic you'd like to learn more about.");
  }
  
  return responses;
};

function formatNetworkingResponse(concept: NetworkingConcept): string {
  return `**${concept.topic}**:\n\n${concept.explanation}\n\n**Examples and Key Points**:\n${concept.examples.map(example => `- ${example}`).join('\n')}`;
};