const express = require("express");

const {
  createUser,
  fetchUsers,
  fetchUserByID,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/create", createUser);
router.get("/all", fetchUsers);
router.get("/:id", fetchUserByID);
router.post("/delete/:id", deleteUser);

module.exports = router;
