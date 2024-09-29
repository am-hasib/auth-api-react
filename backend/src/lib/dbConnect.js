const mongoose = require("mongoose");

exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "authentication",
    });
    console.log("MongoDB Connection Eastablished");
  } catch (error) {
    console.log("Error to Connect Database", error);
  }
};
