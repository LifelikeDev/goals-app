const express = require("express");
const dotenv = require("dotenv").config();
const portNumber = process.env.PORT;
const goalRoutes = require("./routes/goalRoutes");

const app = express();

app.use("/api/goals", goalRoutes);

app.listen(portNumber, () =>
  console.log(`Server started on http://localhost:${portNumber}`)
);
