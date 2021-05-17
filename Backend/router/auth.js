import express from "express";
import dbConnect from "../config.js";
import User from "../models/userSchema.js";
import Login from "../models/loginSchema.js";
import logindata from "../data/logindata.js";

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
    const formdata = await user.save();

    res.status(201).json({ message: "data saved" });
  } catch {
    console.log(err);
  }
});

// router.get("/login",(req,res)=>{
//     const login= new  Login
// })
export default router;
