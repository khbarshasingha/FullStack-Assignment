import bcrypt from "bcryptjs";
const logindata = [
  {
    uname: "Barsha",
    pwd: bcrypt.hashSync("123456", 10)
  }
];

export default logindata;
