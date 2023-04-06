const express = require("express");
const { addRestaurant } = require("../controllers/restaurant.controller");

const router = express.Router();

router.route("/add").post(addRestaurant);

module.exports = router;
