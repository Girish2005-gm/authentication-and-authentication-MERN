const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const connection = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongoose connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
};

module.exports = connection;
