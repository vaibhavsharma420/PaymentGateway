import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js"; 
import cors from "cors";
export const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

config({path: "./config/config.env"})

app.use("/api", paymentRoute);