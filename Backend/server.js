import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import User from "./models/userSchema.js";
import router from "./router/auth.js";
import logindata from "./data/logindata.js";
import dbConnect from "./config.js";
import Login from "./models/loginSchema.js";
import mongoose from "mongoose";
const app = express();

dotenv.config();
dbConnect();

// link the router files

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.listen(PORT, console.log("server running"));

//insert userlogin data from  dtaa/logindata.js to online db
const insertLoginData = async () => {
  try {
    await Login.deleteMany();
    const newlogin = await Login.insertMany(logindata);
    console.log("Login Details inserted");
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

insertLoginData();
app.use("/", router);
