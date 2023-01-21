import User from "../models/User.js";
import { hashPass } from "../utils/hash.js";

export async function getAllUsers(request, response) {
    const users = await User.find({});

    try {
        response.status(200).send(users);
    } catch (err) {
        response.status(500).send(err);
    }
}

export async function createDish(request, response) {
    const newDish = new Dish(request.body);
    newDish.password = hashPass(newDish.password);

    try {
        await newDish.save();
        response.status(200).send(newDish);
    } catch (error) {
        response.status(500).send(error);
    }
}