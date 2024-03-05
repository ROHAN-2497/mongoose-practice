import { Request, Response, NextFunction } from "express";
import { createUserToDB } from "./user.service";

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const user = createUserToDB();
};
