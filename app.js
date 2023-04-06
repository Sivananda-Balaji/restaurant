const express = require("express");
const restaurantRouter = require("./routes/restaurant.route");
const app = express();

app.use(express.json());

app.use("/api/restaurant", restaurantRouter);

module.exports = app;
