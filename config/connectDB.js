const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    console.log("database is connected ...");
  } catch (error) {
    console.log("database is not connected ");
  }
};

module.exports = connectDB;
