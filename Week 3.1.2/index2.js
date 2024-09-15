const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://arpitpatni1800:XuvAr12345@cluster0.tujsw.mongodb.net/usernewapp"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).send("User already exists");
  }
  const user = new User({
    name: name,
    email: email,
    password: password,
  });
  user.save();
  res.json({
    msg: "User created successfully",
  });
});
app.post("/signin", async function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
     let token = jwt.sign({ username: email }, jwtPassword);
     return res.json({
       token,
     });
  }
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // Find all users except the current logged-in user
    const users = await User.find({ email: { $ne: username } }); // $ne means 'not equal'

    return res.json({
      users, // Return the users
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
