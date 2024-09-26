import dotenv from "dotenv";
import Express from "express";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import annonceRoutes from "./routes/annonceRoutes";

dotenv.config();

const app = Express();
app.use(Express.json());
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/annonces", annonceRoutes);

export default app;
