const mongoose = require("mongoose");
const hashPassword = require("../middlewares/hashPasswordMiddleware");
const comparePassword = require("../utils/comparePassword");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [
        /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        "Please enter a valid email address",
      ],
    },
    avatar: {
      type: String,
      default: 'https://t4.ftcdn.net/jpg/10/29/66/05/360_F_1029660575_DPdwknEa7hiEveRujsBmxXLfFxJM31UA.jpg'
    },
    followers: {
      type: Number,
      default: 0
    },
    following: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Number,
      default: Date.now
    },
    interests: {
      type: Array,
      default: []
    },
    location: {
      type: String,
      default: "N/A"
    },
    bio: {
      type: String,
      default: "Bio is not set yet!"
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
  },
  { timestamps: true }
);

// Apply hashing middleware
userSchema.pre("save", hashPassword);

// Attach compare password method
userSchema.methods.comparePassword = function (password) {
  return comparePassword(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
