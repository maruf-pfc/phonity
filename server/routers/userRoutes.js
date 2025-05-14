const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const authMiddleware = require("../middlewares/customerMiddleware");
const { userProfile } = require("../controllers/userController");
const { getAllUsers, getUserById } = require("../controllers/adminController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware ,userProfile);
router.get("/", getAllUsers)
router.get("/:userId", getUserById)

module.exports = router;
