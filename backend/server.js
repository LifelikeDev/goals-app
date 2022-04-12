const path = require('path')
const express = require("express");
const colors = require("colors");
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const portNumber = process.env.PORT;
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

// serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(portNumber, () =>
  console.log(`Server started on http://localhost:${portNumber}`)
);
