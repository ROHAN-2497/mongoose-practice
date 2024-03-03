import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

// Using Cors
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
  next();
});

export default app;
