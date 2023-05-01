import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { userinfo } from "../interfaces/User";
// mongoose.connect();

const userInfoSchema = new Schema<userinfo>({
  username: String,
  firstName: String,
  lastName: String,
  emailAddress: String,
  phoneNumber: String,
});

const User = mongoose.model<userinfo>("User", userInfoSchema);

module.exports=User;
