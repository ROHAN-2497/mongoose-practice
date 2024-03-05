import express from "express";
import { createUser } from "./user.controller";
const userRoutes = express.Router();
userRoutes.get("/", createUser);
export default userRoutes;
