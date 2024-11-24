require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const storeRoutes = require("./routes/store");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/", storeRoutes);

// connect to db
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to store database");

    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port for store", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
