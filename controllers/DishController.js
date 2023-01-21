import path from 'path';
import { fileURLToPath } from 'url';

import Dish from "../models/dish.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function getAllDishes(request, response) {
    const dishes = await Dish.find({});

    try {
        response.status(200).send(dishes);
    } catch (err) {
        response.status(500).send(err);
    }
}

export async function createDish(request, response) {
    const newDish = new Dish(request.body);
    newDish.photoUrls.push(request.file.filename)

    try {
        await newDish.save();
        response.status(200).send(newDish);
    } catch (error) {
        response.status(500).send(error);
    }
}

export async function readDish(request, response) {
    const dish = await Dish.findById(request.params.id);

    try {
        if (!dish) {
            response.status(404).send("No item found!");
        } else {
            response.status(200).send(dish)
        }
    } catch (error) {
        response.status(500).send(error);
    }
}

export async function updateDish(request, response) {
    try {
        const dish = await Dish.findByIdAndUpdate(request.params.id, request.body);
        await dish.save();
        response.status(200).send(dish)
    } catch (err) {
        response.status(500).send(err);
    }
}

export async function deleteDish(request, response) {
    try {
        const dish = await Dish.findByIdAndDelete(request.params.id);

        if (!dish) {
            response.status(404).send("No item found!");
        } else {
            response.status(200).send();
        }
    } catch (err) {
        response.status(500).send(err);
    }
}