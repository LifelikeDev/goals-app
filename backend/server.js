const express = require("express");
const dotenv = require("dotenv").config();
const portNumber = process.env.PORT;
const router = require("./routes/goalRoutes");

const app = express();

app.use(router);

app.listen(portNumber, () =>
  console.log(`Server started on http://localhost:${portNumber}`)
);
