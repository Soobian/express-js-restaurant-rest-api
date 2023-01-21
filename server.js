import express from "express";
import bodyParser from "body-parser";
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
import { fileURLToPath } from 'url';
import upload from "./config/storage.js";
import { getAllDishes, 
    createDish, 
    readDish, 
    updateDish, 
    deleteDish } from "./controllers/DishController.js";

//import "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3301;

app.use(cors());
app.use(express.static('uploads'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./models");
const Role = db.role;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

db.mongoose
    .connect(process.env.URI_MONGODB, options).then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    }).catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: 'guest',
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'guest' to roles collection");
            });
            new Role({
                name: 'client',
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'client' to roles collection");
            });
            new Role({
                name: 'manager',
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'manager' to roles collection");
            });
            new Role({
                name: 'admin',
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    })
}

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