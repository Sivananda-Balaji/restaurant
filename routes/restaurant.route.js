const express = require("express");
const {
  addRestaurant,
  getRestaurants,
  getCategories,
  findByCategory,
  getRestaurant,
  findByRating,
  updateRestaurant,
  deleteRestaurant,
  deleteAll,
} = require("../controllers/restaurant.controller");

const router = express.Router();

router.route("/").get(getRestaurants).delete(deleteAll);
router.route("/add").post(addRestaurant);
router.route("/categories").get(getCategories);
router.route("/categories/:categoryName").get(findByCategory);
router
  .route("/:id")
  .get(getRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);
router.route("/rating/:ratingValue").get(findByRating);

module.exports = router;
