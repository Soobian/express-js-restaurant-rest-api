import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { getAllDishes, 
    createDish, 
    readDish, 
    updateDish, 
    deleteDish } from "./controllers/DishController.js";

import "./config/db.js";

import cors from "cors";

dotenv.config();

const app = express();

app.use(cors())

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
    .route("/dishes")
    .get(getAllDishes)
    .post(createDish);

app
    .route("/dishes/:id")
    .get(readDish)
    .put(updateDish)
    .delete(deleteDish);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});