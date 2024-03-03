import cors from "cors";
import express from "express";

const app = express();

/* Using Cors*/

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
