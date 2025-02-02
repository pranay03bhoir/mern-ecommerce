const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "e-commerce",
    });
    console.log("Connected to DB");
  } catch (e) {
    console.error("Error connecting to database", e);
    process.exit(1);
  }
};
module.exports = connectToDB;
