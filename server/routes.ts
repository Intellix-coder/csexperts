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
      
      // Use email service here if available
      // For now, just log the message
      console.log("Contact form submission:", contactData);
      
      res.status(200).json({ message: "Message received" });
    } catch (error) {
      console.error("Error in /api/contact:", error);
      res.status(400).json({ error: "Invalid form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
