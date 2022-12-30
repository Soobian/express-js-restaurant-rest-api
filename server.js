import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import { getAllRestaurants, 
    createRestaurant, 
    readRestaurant, 
    updateRestaurant, 
    deleteRestaurant } from "./controllers/RestaurantController.js";

import "./config/db.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
    .route("/restaurants")
    .get(getAllRestaurants)
    .post(createRestaurant);

app
    .route("/restaurants/:id")
    .get(readRestaurant)
    .put(updateRestaurant)
    .delete(deleteRestaurant);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});