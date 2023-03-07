const express = require("express");
const morgan = require("morgan");
require("colors");

// dotenv config
require("dotenv").config();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
// app.get("/auth", require("./src/routes/authRoute"));

// PORT
const PORT = process.env.PORT || 8000;

// listen server on port
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} mode on PORT ${PORT}`.bgYellow
      .white
  );
});
