import bcrypt from "bcryptjs";
const logindata = [
  {
    username: "Barsha",
    password: bcrypt.hashSync("123456", 10)
  }
];

export default logindata;
