const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const SECRET_KEY = "123456789";
const users = [];
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  const exists = users.find((u) => u.email === email);
  if (exists) return res.status(400).json({ message: "Email đã tồn tại" });
  const newUser = { email, password };
  users.push(newUser);
  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token, email });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user)
    return res.status(401).json({ message: "Email hoặc mật khẩu sai" });
  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token, email });
});
app.listen(5000, () =>
  console.log("Mock backend running on http://localhost:5000")
);
