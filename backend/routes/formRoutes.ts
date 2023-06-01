import { userinfo } from "./../interfaces/User";
import express from "express";
import nodemailer from "nodemailer";
import { Request, Response } from "express";
const User = require("../models/User");
const router = express.Router();
const formRoutes = router;

router.post("/api/submit_user_info", async (req: Request, res: Response) => {
  const user = new User(req.body);

  if (!user) {
    user.save((err: Error, user: userinfo) => {
      if (err) {
        throw err;
      } else {
        const transporter = nodemailer.createTransport({
          service: "outlook",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });
        const mailOptions = {
          from: ``,
          to: ``,
          subject: `Has Signed Up For The Course!`,
          text: `Hello Mr.Huggins, here are the details of the student that signed up for your defensive
            driving course: \n
            
            Best Regards`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        console.log();
      }

      res.send(`The record of ${user} was saved successfully`);
    });
  }
});

router.get("/api/get_user_info", async (req: Request, res: Response) => {
  res.send("Route is working as expected");
});
export default formRoutes;
