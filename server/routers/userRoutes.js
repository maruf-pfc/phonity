const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const authMiddleware = require("../middlewares/customerMiddleware");
const { userProfile } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, userProfile);

module.exports = router;
