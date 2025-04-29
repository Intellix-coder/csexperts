import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { aiService } from "./services/aiService";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/ai/chat", async (req: Request, res: Response) => {
    try {
      const schema = z.object({
        messages: z.array(
          z.object({
            role: z.enum(["user", "assistant"]),
            content: z.string(),
          })
        ),
      });

      const { messages } = schema.parse(req.body);
      
      // Get the response from OpenAI
      const response = await aiService.getAIResponse(messages);
      
      res.json(response);
    } catch (error) {
      console.error("Error in /api/ai/chat:", error);
      res.status(500).json({ 
        text: "Sorry, I'm having trouble processing your request. Please try again.",
        action: { type: "none" }
      });
    }
  });

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Log contact form submission for demonstration purposes
      console.log('Contact form submission received:', contactData);
      
      // DEMO MODE - Store the message but don't actually send an email
      // In the absence of a working SendGrid API key, we'll simulate success
      const success = true;
      
      // For demo purposes, we'll just log the message that would be sent
      console.log('Email would be sent with content:');
      console.log(`From: ${contactData.name} (${contactData.email})`);
      console.log(`Message: ${contactData.message}`);
      
      res.status(200).json({ 
        message: "Message received successfully! (In demo mode - no actual email sent)" 
      });
    } catch (error) {
      console.error("Error in /api/contact:", error);
      res.status(400).json({ error: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
