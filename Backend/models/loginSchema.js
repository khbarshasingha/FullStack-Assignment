import mongoose from "mongoose";
// import logindata from "../data/logindata";
import jwt from "jsonwebtoken";

const loginSchema = new mongoose.Schema({
  uname: {
    type: String,
    required: true
  },
  pwd: {
    type: String,
    required: true
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

loginSchema.methods.generateAuthToken = async function() {
  try {
    let token = jwt.sign({ _id: this._d }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Login = mongoose.model("Login", loginSchema);
export default Login;
