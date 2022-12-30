import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    }}
, { collection: 'Restaurants'});

export default model("Restaurants", RestaurantSchema);