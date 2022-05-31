require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

require("./db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Home");
});

app.listen(PORT, () => {
  console.log(`Server starts on http://localhost:${PORT}`);
});
