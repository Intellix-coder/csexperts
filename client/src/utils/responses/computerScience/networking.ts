/**
 * Specialized responses for computer networking topics
 * This module provides responses related to networking concepts for A Level Computer Science
 */

// Basic networking concepts as a reference for responses
const NETWORKING_CONCEPTS = {
  osi_model: {
    layers: [
      "Physical Layer (Layer 1): Hardware like cables, switches and network interface cards",
      "Data Link Layer (Layer 2): Frames, MAC addresses, error detection",
      "Network Layer (Layer 3): IP addresses, routing, packet forwarding",
      "Transport Layer (Layer 4): TCP/UDP, ports, flow control",
      "Session Layer (Layer 5): Session establishment, maintenance and termination",
      "Presentation Layer (Layer 6): Data translation, encryption, compression",
      "Application Layer (Layer 7): End-user services like HTTP, FTP, SMTP"
    ],
    overview: "The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes the functions of a networking system into seven abstraction layers from physical connections to application interfaces."
  },
  
  tcp_ip: {
    layers: [
      "Link Layer: Similar to OSI layers 1-2, handles physical connections",
      "Internet Layer: Similar to OSI layer 3, handles IP addressing and routing",
      "Transport Layer: Similar to OSI layer 4, handles TCP/UDP protocols",
      "Application Layer: Similar to OSI layers 5-7, handles application protocols"
    ],
    overview: "The TCP/IP model is a more practical implementation used in real-world networks, condensing the OSI model into four layers."
  },
  
  protocols: {
    common: [
      "HTTP/HTTPS: Web browsing protocols",
      "FTP: File Transfer Protocol for uploading/downloading files",
      "SMTP/POP3/IMAP: Email protocols",
      "DNS: Domain Name System for resolving domain names to IP addresses",
      "TCP: Connection-oriented, reliable data delivery",
      "UDP: Connectionless, faster but unreliable data delivery"
    ],
    overview: "Network protocols are standardized rules that determine how data is transmitted between devices on a network."
  },
  
  addressing: {
    overview: "IP addressing is a core networking concept that involves assigning unique identifiers (IP addresses) to devices on a network.",
    ipv4: "IPv4 uses 32-bit addresses (e.g., 192.168.1.1) with 4 octets separated by dots.",
    ipv6: "IPv6 uses 128-bit addresses (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334) to overcome IPv4 address exhaustion.",
    mac: "MAC addresses are hardware addresses assigned to network interfaces, consisting of 6 bytes typically written in hexadecimal (e.g., 00:1A:2B:3C:4D:5E)."
  }
};

/**
 * Generate a response for networking-related queries
 * @param query The user's message/query
 * @returns A helpful response about networking
 */
export function getNetworkingResponse(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  // OSI Model questions
  if (lowerQuery.includes('osi') || 
     (lowerQuery.includes('layer') && lowerQuery.includes('network'))) {
    return `${NETWORKING_CONCEPTS.osi_model.overview}

The seven layers of the OSI Model are:
1. ${NETWORKING_CONCEPTS.osi_model.layers[0]}
2. ${NETWORKING_CONCEPTS.osi_model.layers[1]}
3. ${NETWORKING_CONCEPTS.osi_model.layers[2]}
4. ${NETWORKING_CONCEPTS.osi_model.layers[3]}
5. ${NETWORKING_CONCEPTS.osi_model.layers[4]}
6. ${NETWORKING_CONCEPTS.osi_model.layers[5]}
7. ${NETWORKING_CONCEPTS.osi_model.layers[6]}

For A Level Computer Science, focus on understanding the purpose of each layer and how they interact. Remember that data encapsulation occurs as data moves down the layers, with each layer adding its own header information.`;
  }
  
  // TCP/IP questions
  if (lowerQuery.includes('tcp/ip') || lowerQuery.includes('tcp ip') || 
     (lowerQuery.includes('tcp') && lowerQuery.includes('model'))) {
    return `${NETWORKING_CONCEPTS.tcp_ip.overview}

The four layers of the TCP/IP model are:
1. ${NETWORKING_CONCEPTS.tcp_ip.layers[0]}
2. ${NETWORKING_CONCEPTS.tcp_ip.layers[1]}
3. ${NETWORKING_CONCEPTS.tcp_ip.layers[2]}
4. ${NETWORKING_CONCEPTS.tcp_ip.layers[3]}

For A Level exams, be sure to understand the differences between the OSI and TCP/IP models, as well as how actual internet communication maps to these layers.`;
  }
  
  // Protocol questions
  if (lowerQuery.includes('protocol') || 
     lowerQuery.includes('http') || lowerQuery.includes('ftp') || 
     lowerQuery.includes('smtp') || lowerQuery.includes('dns')) {
    return `${NETWORKING_CONCEPTS.protocols.overview}

Common networking protocols include:
- ${NETWORKING_CONCEPTS.protocols.common[0]}
- ${NETWORKING_CONCEPTS.protocols.common[1]}
- ${NETWORKING_CONCEPTS.protocols.common[2]}
- ${NETWORKING_CONCEPTS.protocols.common[3]}
- ${NETWORKING_CONCEPTS.protocols.common[4]}
- ${NETWORKING_CONCEPTS.protocols.common[5]}

For your A Level studies, understand the purpose of each protocol, which layer it operates at, and typical use cases.`;
  }
  
  // IP addressing questions
  if (lowerQuery.includes('ip address') || lowerQuery.includes('ipv4') || 
     lowerQuery.includes('ipv6') || lowerQuery.includes('mac address')) {
    return `${NETWORKING_CONCEPTS.addressing.overview}

Key addressing concepts:
- ${NETWORKING_CONCEPTS.addressing.ipv4}
- ${NETWORKING_CONCEPTS.addressing.ipv6}
- ${NETWORKING_CONCEPTS.addressing.mac}

For A Level Computer Science, you should understand subnet masking, public vs private IP addressing, and how IP addresses are used in routing.`;
  }
  
  // General networking concepts
  return `Computer networking is about how devices communicate and share resources.

Key A Level networking concepts include:
- Network topologies (star, bus, ring, mesh)
- OSI and TCP/IP models
- Network protocols (HTTP, FTP, SMTP, TCP, UDP)
- IP addressing and subnetting
- Network security principles

Is there a specific networking topic you'd like me to explain in more detail?`;
}