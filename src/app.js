import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

// basic configs
app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http:localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

// import the routes
import router from "./routes/healthcheck.routes.js";
app.use("/api/v1/healthcheck", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/testing", (req, res) => {
  res.send("This is the testing page.");
});

export default app;
