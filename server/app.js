import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js"; 
import cors from "cors";
export const app = express(); 

app.use(cors());

config({path: "./config/config.env"})

app.use("/api", paymentRoute);
