const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

/*
  IMPORT ROUTES
*/
const geocode = require("./routes/geocode");
const weather = require("./routes/weather");

/*
  ADD MIDDLEWARES
*/
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/*
  ADD ROUTES
*/
app.use("/geocode", geocode);
app.use("/weather", weather);
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status);
  res.send({
    error: {
      status,
      message: err.message,
    },
  });
});
app.listen(port, () => console.log(`Server running at port ${port}...`));
