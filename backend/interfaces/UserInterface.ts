import { Document } from "mongoose";
import mongoose from "mongoose";
export interface userinfo extends mongoose.Document {
  username?: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  isAdmin?: boolean;
  password?: string;
}
