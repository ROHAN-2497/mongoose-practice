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

  //create schema Using Interface

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

// pattren MVC  Moduler

// interface --> user.interface.ts
// schema, modals  --> user.modal.ts
// route
// router function --> controler.ts
// Database Query Function --> service
