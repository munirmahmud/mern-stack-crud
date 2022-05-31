const express = require("express");

const {
  createUser,
  fetchUsers,
  fetchUserByID,
} = require("../controllers/userController");

const router = express.Router();

router.post("/create", createUser);
router.get("/all", fetchUsers);
router.get("/:id", fetchUserByID);

module.exports = router;
