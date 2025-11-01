import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { userinfo } from "../interfaces/UserInterface";
// mongoose.connect();

const userInfoSchema = new Schema<userinfo>({
  username: String,
  firstName: String,
  lastName: String,
  emailAddress: String,
  phoneNumber: String,
  isAdmin: { type: Boolean, default: false },
  password: String,
});

const User = mongoose.model<userinfo>("User", userInfoSchema);

export default User;
