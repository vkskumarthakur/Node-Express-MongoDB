const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connected successfully");
  } catch (error) {
    console.log("error establishing database connection");
    process.exit(0);
  }
};

module.exports = connectDb;
