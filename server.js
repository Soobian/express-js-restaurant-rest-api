import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import upload from "./config/storage.js";
import { getAllDishes, 
    createDish, 
    readDish, 
    updateDish, 
    deleteDish } from "./controllers/DishController.js";

import "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3301;

app.use(cors());
app.use(express.static('uploads'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route("/dishes")
    .get(getAllDishes)
    .post(upload.single("image"), createDish);

app.route("/dishes/:id")
    .get(readDish)
    .put(updateDish)
    .delete(deleteDish);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});