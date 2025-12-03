const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Sample users array
const users = [
  { id: 1, name: "Rana Islam", email: "rana@gmail.com" },
  { id: 2, name: "Rakib Islam", email: "rakib@gmail.com" },
  { id: 3, name: "Rupom Islam", email: "rupom@gmail.com" },
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST a new user
app.post("/users", (req, res) => {
  const newUser = req.body;

  // Validation
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ error: "Name and email required" });
  }

  newUser.id = users.length + 1;
  users.push(newUser);

  console.log("New user added:", newUser);

  // Respond with status 201
  res.status(201).json(newUser);
});

// Test root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
