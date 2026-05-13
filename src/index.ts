import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import prisma from "./prisma";

// Load environment variables from .env file
dotenv.config({ quiet: true });

/**
 * Creates and configures the Express application
 */
const app = express();

// Port from .env file or default to 5000
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Adds security headers to every response
app.use(cors()); // Allows frontend to talk to backend
app.use(express.json()); // Allows backend to read JSON from request body

/**
 * Health check route
 * Verifies the server and database are both running
 */
app.get("/health", async (req, res) => {
  try {
    // Try to connect to the database
    await prisma.$connect();
    res.status(200).json({
      status: "ok",
      message: "Hope API is running ",
      database: "connected ",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Database connection failed",
      database: "disconnected ",
    });
  }
});

// Start the server
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`🌿 Hope API running on http://localhost:${PORT}`);
  }
});

export default app;
