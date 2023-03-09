const express = require("express");
const morgan = require("morgan");
const connectToDB = require("./src/config/connection");
const colors = require("colors");
const dotenv = require("dotenv");

// dotenv config
dotenv.config();

// mongodb connection
connectToDB();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", require("./src/routes/userRoutes"));
app.use("/api/v1/admin", require("./src/routes/adminRoutes"));
app.use("/api/v1/doctor", require("./src/routes/doctorRoutes"));

// PORT
const PORT = process.env.PORT || 8000;

// listen server on port
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} mode on PORT ${PORT}`.bgYellow
      .white
  );
});
