const Restaurant = require("../model/restaurant.model");

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

module.exports = { addRestaurant };
