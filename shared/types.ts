export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AIRequest {
  messages: AIMessage[];
}

export interface AIResponse {
  text: string;
  action?: {
    type: 'navigate' | 'downloadFile' | 'none';
    target?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
