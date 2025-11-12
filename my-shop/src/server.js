const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const jwt = require("jsonwebtoken");

const SECRET_KEY = "123456";

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/register", (req, res) => {
  const { fullname, email, password } = req.body;
  const db = router.db;
  const users = db.get("users").value();
  const exists = users.find((u) => u.email === email);
  if (exists) return res.status(400).json({ message: "Email đã tồn tại" });

  const newUser = { id: Date.now(), fullname, email, password };
  db.get("users").push(newUser).write();
  const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token, email });
});

server.use(router);
server.listen(5000, () => console.log("Fake backend running on http://localhost:5000"));
