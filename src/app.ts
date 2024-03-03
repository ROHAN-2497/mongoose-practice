import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";
import { Schema, model } from "mongoose";

const app: Application = express();

// Using Cors
app.use(cors());

// parse data Middleware
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
    email: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAdress: { type: String, required: true },
    permanentAdress: { type: String, required: true },
  });
  //   make Model
  const User = model<IUser>("User", userSchema);
  // model theke ekta instance make korte hobe
  const createUserToDB = async () => {
    const user = new User({
      id: "6933",
      role: "student",
      password: "jhakanaka",
      name: {
        firstName: "jubayar2",
        middleName: "ahmmed",
        lastName: "rohan",
      },
      gender: "male",
      email: "r1orhan@gmail.com",
      contactNo: "01629124072",
      emergencyContactNo: "01797511297",
      presentAdress: "Ishurdi",
      permanentAdress: "Jannatul ferdous",
    });
    await user.save();
    console.log(user);
  };
});

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
