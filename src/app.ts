import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";
import { Schema } from "mongoose";

const app: Application = express();

// Using Cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // create a Interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAdress: string;
    permanentAdress: string;
  }

  //create schema Using Interface

  const userSchema = new Schema<IUser>({
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    id: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"] },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAdress: { type: String, required: true },
    permanentAdress: { type: String, required: true },
  });

  //   res.send("Hello World!");
  //   next();
});

export default app;

// insering a test data in a mongodb
/*
  *  step 1 : interface
  step 2 : schema
  step 3 : model
  step 4 : Database Query
  */
