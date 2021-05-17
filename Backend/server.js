import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import User from "./models/userSchema.js";
import router from "./router/auth.js";

import dbConnect from "./config.js";
const app = express();

dotenv.config();
dbConnect();

// link the router files

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.listen(PORT, console.log("server running"));

app.use("/", router);
