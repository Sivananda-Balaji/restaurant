const express = require("express");
const {
  addRestaurant,
  getRestaurants,
} = require("../controllers/restaurant.controller");

const router = express.Router();

router.route("/").get(getRestaurants);
router.route("/add").post(addRestaurant);

module.exports = router;
