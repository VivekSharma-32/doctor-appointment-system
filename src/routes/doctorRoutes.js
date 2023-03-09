const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Get single doctor info
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

// update method
router.post("/updateProfile", authMiddleware, updateProfileController);

// single doc info
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

// Get appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

// udpate status route
router.post("/update-status", authMiddleware, updateStatusController);
module.exports = router;
