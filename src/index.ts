import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import prisma from "./prisma";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { authMiddleware } from "./middleware/authMiddleware";
import { errorMiddleware } from "./middleware/errorMiddleware";
import userRoutes from "./routes/userRoutes";
import situationRoutes from "./routes/situationRoutes";
import specialistRoutes from "./routes/specialistRoutes";
import bookingRoutes from "./routes/bookingRoutes";

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.get("/health", async (req, res) => {
  try {
    await prisma.$connect();
    res.status(200).json({
      status: "ok",
      message: "Hope API is running 🌿",
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

app.use("/users", userRoutes);
app.use("/situations", situationRoutes);
app.use("/specialists", specialistRoutes);
app.use("/bookings", authMiddleware, bookingRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`🌿 Hope API running on http://localhost:${PORT}`);
  }
});

export default app;
