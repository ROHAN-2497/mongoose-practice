import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

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
export default User;
