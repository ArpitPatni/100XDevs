const express = require("express");

const app = express();
app.use(express.json())//middlware
function userMiddleWare(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "arpit" || password != "Password@123") {
    res.status(403).json({
      msg: "User doesn't exist",
    });
  } else {
    next();
  }
}
function kidneyMiddleWare(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "Wrong Kidney value",
    });
  }else{
    next();
  }
}
app.get("/health-checkup", userMiddleWare, kidneyMiddleWare, (req, res) => {
  res.send("Your heart is healthy");
});

app.listen(3000);
