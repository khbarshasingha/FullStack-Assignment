import express from "express";
import dbConnect from "../config.js";
import User from "../models/userSchema.js";
import Login from "../models/loginSchema.js";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/form/save-details", async (req, res) => {
  const {
    fname,
    lname,
    mname,
    addr,
    country,
    state,
    zip,
    email,
    phno,
    height,
    weight
  } = req.body;

  if (
    !fname ||
    !lname ||
    !mname ||
    !addr ||
    !country ||
    !state ||
    !zip ||
    !email ||
    !phno ||
    !height ||
    !weight
  ) {
    return res.status(422).json({ error: "fill all the fields" });
  }
  try {
    const user = new User({
      fname,
      lname,
      mname,
      addr,
      country,
      state,
      zip,
      email,
      phno,
      height,
      weight
    });
    await user.save();

    res.status(201).json({ message: "data saved" });
  } catch {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { uname, pwd } = req.body;
    if (!uname || !pwd) {
      return res.status(400).json({ error: "Please fill the data" });
    } else {
      const userlogin = await Login.findOne({ uname: uname });
      if (!userlogin) {
        res.json({ error: "Invalid Credentials" });
      } else {
        const checkpwd = await bcrypt.compare(pwd, userlogin.pwd);

        const token = await userlogin.generateAuthToken();
        console.log(token);

        if (!checkpwd) {
          res.json({ error: "Invalid Credentials" });
        } else {
          res.json({ message: "successfully loggedin" });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
});
export default router;
