import cors from "cors";
import express, { Application } from "express";

const app: Application = express();

// Using Cors
app.use(cors());

// parse data Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/app/v1/user");

//   res.send("Hello World!");
//   next();
export default app;

// insering a test data in a mongodb
/*
  *  step 1 : interface
  step 2 : schema
  step 3 : model
  step 4 : Database Query
  */

// pattren MVC  Moduler

// interface --> user.interface.ts
// schema, modals  --> user.modal.ts
// route
// router function --> controler.ts
// Database Query Function --> service
