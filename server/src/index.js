require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");

const app = express();
const PORT = 4000;

require("./db");

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server starts on http://localhost:${PORT}`);
});
