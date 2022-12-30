import Restaurant from "../models/Restaurant.js";

export async function getAllRestaurants(request, response) {
    const restaurants = await Restaurant.find({});

    try {
        response.status(200).send(restaurants);
    } catch (err) {
        response.status(500).send(err);
    }
}

export async function createRestaurant(request, response) {
    const newRestaurant = new Restaurant(request.body);
    try {
        await newRestaurant.save();
        response.status(200).send(newRestaurant);
    } catch (error) {
        response.status(500).send(error);
    }
}

export async function readRestaurant(request, response) {
    console.log(request.params)
    const restaurant = await Restaurant.findById(request.params.id);

    try {
        if (!restaurant) {
            response.status(404).send("No item found!");
        } else {
            response.status(200).send(restaurant)
        }
    } catch (error) {
        response.status(500).send(error);
    }
}

export async function updateRestaurant(request, response) {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(request.params.id, request.body);
        await restaurant.save();
        response.status(200).send(restaurant)
    } catch (err) {
        response.status(500).send(err);
    }
}

export async function deleteRestaurant(request, response) {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(request.params.id);

        if (!restaurant) {
            response.status(404).send("No item found!");
        } else {
            response.status(200).send();
        }
    } catch (err) {
        response.status(500).send(err);
    }
}