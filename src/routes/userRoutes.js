const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentController,
} = require("../controllers/UserController");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

// routes
//Login || POST
router.post("/login", loginController);

//Register || POST
router.post("/register", registerController);

// Auth || POST
router.post("/getUserData", authMiddleware, authController);

// Apply doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

// get all notification || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

// Delete all notification || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorController);

// Book Appointemnt route
router.post("/book-appointment", authMiddleware, bookAppointmentController);

// check availability
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

// Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentController);

module.exports = router;
