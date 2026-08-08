import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { prompt, history } = req.body;
      
      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
      
      const chat = ai.chats.create({
        model: "gemini-3.6-flash",
        config: {
          systemInstruction: "You are a helpful, friendly, and knowledgeable AI assistant for a local government and citizen services application. You help users find information on jobs, scholarships, government schemes, and basic inquiries. Be concise and conversational.",
          temperature: 0.7,
        },
      });
      
      // We don't have access to chat history hydration easily without storing the session
      // For this simple example, we'll just send the current prompt but you could format it to include history if needed.
      // E.g., combine history into the prompt string.
      let contextPrompt = prompt;
      if (history && history.length > 0) {
        contextPrompt = `Conversation History:\n${history.map((msg: any) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`).join('\n')}\n\nUser: ${prompt}`;
      }

      const response = await chat.sendMessage({ message: contextPrompt });
      
      res.json({ text: response.text });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      res.status(500).json({ error: error.message || 'Failed to generate response' });
    }
  });

  app.post("/api/services/:id", (req, res) => {
    const { id } = req.params;
    // Simulate some latency
    setTimeout(() => {
      res.json({ 
        success: true, 
        message: `Successfully connected to the ${id.replace('-', ' ')} service API.`,
        data: {
          timestamp: new Date().toISOString(),
          status: 'online',
          requestId: Math.random().toString(36).substring(7)
        }
      });
    }, 1500);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
