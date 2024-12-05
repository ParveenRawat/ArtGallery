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
  getCartItems,
  updateCart,
  removeFromCart,
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
router.post("/cart", getCartItems);
router.post("/updatecart", updateCart);
router.delete("/removefromcart", removeFromCart)

module.exports = router;
