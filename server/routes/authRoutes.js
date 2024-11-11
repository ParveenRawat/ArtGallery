const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  registerUser,
  loginUser,
  getProfile,
  logoutUser,
  getArt,
  uploadArt,
  addToCart,
} = require("../controllers/authController");
// middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
router.get("/logout", logoutUser);
router.post("/upload", uploadArt);
router.get("/art", getArt);
router.post("/addToCart", addToCart);

module.exports = router;
