import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

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
 * Used to verify the server is running
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Hope API is running 🌿",
  });
});

// Start the server
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`🌿 Hope API running on http://localhost:${PORT}`);
  }
});

export default app;
