const Restaurant = require("../models/restaurant.model");

const addRestaurant = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(500).send({
        message: "Content cannot be empty",
      });
    }
    const restaurantObj = { ...req.body };
    const newRestaurant = await Restaurant.create(restaurantObj);
    res.send(newRestaurant);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Some error occurred while creating the Restaurant",
    });
  }
};

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    if (restaurants.length == 0) {
      return res.status(200).send({
        restaurants,
        message: "Restaurants fetched successfully.",
      });
    }
    res.status(200).send({
      restaurants,
      message: "Restaurants fetched successfully.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Some error occured while fetching the Restaurants.",
    });
  }
};

module.exports = { addRestaurant, getRestaurants };
