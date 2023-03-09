const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// GET Method ||    USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

// Get METHOD || Doctors
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

// Accout status || POST
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
