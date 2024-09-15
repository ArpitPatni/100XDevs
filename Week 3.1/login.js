const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json());

// const schema=zod.array(zod.number())

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});

app.post("/login", (req, res) => {
  const response = schema.safeParse(req.body);
  if (!response.success) {
    res.status(411).send(response.error.issues[0].message);
  } else {
    res.send("Everything is good");
  }
});

//global catch
app.use((err, req, res, next) => {
  res.json({
    msg: "Sry something is worng",
  });
});
app.listen(3000);
