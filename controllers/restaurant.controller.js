const Restaurant = require("../models/restaurant.model");

const addRestaurant = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
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

const getCategories = async (req, res) => {
  try {
    const category = await Restaurant.distinct("category");
    res.send(category);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Some error occurred while fetching Categories",
    });
  }
};

const findByCategory = async (req, res) => {
  try {
    const { categoryName } = req.params;
    const restaurants = await Restaurant.find({ category: categoryName });
    res.send(restaurants);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Some error occured while fetching the Restaurant.",
    });
  }
};

const getRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const oneRestaurant = await Restaurant.findOne({ _id: id });
    if (!oneRestaurant) {
      return res.status(404).send({
        message: "No Restaurant found with the given ID",
      });
    }
    res.send(oneRestaurant);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Some error occured while fetching the Restaurant.",
    });
  }
};

const findByRating = async (req, res) => {
  try {
    const { ratingValue } = req.params;
    const restaurantList = await Restaurant.find({
      rating: { $gte: ratingValue },
    });
    res.send(restaurantList);
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Some error occured while fetching the Restaurant.",
    });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        message: "Restaurant Data is required.",
      });
    }
    const { name, description, category, imageURL, location, phone, rating } =
      req.body;
    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { _id: id },
      {
        name,
        description,
        category,
        imageURL,
        location,
        phone,
        rating,
        updatedAt: Date.now(),
      },
      { new: true }
    );
    if (!updatedRestaurant) {
      return res.status(200).send({
        message: "No Restaurant found for given ID.",
      });
    }
    res.send({ message: "Restaurant updated successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Some error occured while fetching the Restaurant.",
    });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
    if (deletedRestaurant) {
      res.status(200).send({
        restaurant: deletedRestaurant,
        message: "Restaurant deleted successfully.",
      });
    } else {
      res.send({
        restaurant: null,
        message: "Restaurant deleted successfully.",
      });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ message: "Some error occured while deleting the Restaurant." });
  }
};

const deleteAll = async (req, res) => {
  try {
    const deleteResult = await Restaurant.deleteMany({});
    res.send({
      restaurants: deleteResult,
      message: "Restaurants deleted successfully.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      message: "Some error occured while deleting the Restaurant.",
    });
  }
};

module.exports = {
  addRestaurant,
  getRestaurants,
  getCategories,
  findByCategory,
  getRestaurant,
  findByRating,
  updateRestaurant,
  deleteRestaurant,
  deleteAll,
};
