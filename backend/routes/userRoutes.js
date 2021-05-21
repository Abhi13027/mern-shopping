const express = require("express");
const router = express.Router();
const {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleterUser,
  updateUser,
  getUserById,
} = require("../controllers/userController");
const { protect, admin } = require("../middlewares/authMiddleware");

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/login").post(authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:id")
  .delete(protect, admin, deleterUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
module.exports = router;
