const express = require("express");
const {
  addRestaurant,
  getRestaurants,
  getCategories,
  findByCategory,
  getRestaurant,
  findByRating,
} = require("../controllers/restaurant.controller");

const router = express.Router();

router.route("/").get(getRestaurants);
router.route("/add").post(addRestaurant);
router.route("/categories").get(getCategories);
router.route("/categories/:categoryName").get(findByCategory);
router.route("/:id").get(getRestaurant);
router.route("/rating/:ratingValue").get(findByRating);

module.exports = router;
