const mongoose = require("mongoose");

// connect to DB handler
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);

    // close/exit process with error (1)
    process.exit(1);
  }
};

module.exports = connectDB;
