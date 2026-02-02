import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// basic configs
app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

// cors configs
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
import authRouter from "./routes/auth.routes.js";
import projectRoute from "./routes/project.routes.js";

app.use("/api/v1/healthcheck", router);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/project", projectRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/testing", (req, res) => {
  res.send("This is the testing page.");
});

export default app;
