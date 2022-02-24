const express = require("express");
const colors = require("colors");
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const portNumber = process.env.PORT;
const goalRoutes = require("./routes/goalRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(portNumber, () =>
  console.log(`Server started on http://localhost:${portNumber}`)
);
