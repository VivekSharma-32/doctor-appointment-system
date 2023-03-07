const mongoose = require("mongoose");
require("colors");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB ${mongoose.connection.host}`);
  } catch (err) {
    console.log(`MongoDB server issue`.bgRed.white);
  }
};

module.exports = connectToDB;
