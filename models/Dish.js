import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const DishSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "Not specified",
    },
    ingredients: {
        type: [String],
        required: true,
    },
    max: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) throw new Error("Negative number")
        }
    },
    price: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) throw new Error("Negative number")
        }
    },
    description: {
        type: String,
        required: true,
    },
    photoUrls: {
        type: [String],
        required: true,
    }
}, { collection: 'Dishes'});

export default model("Dishes", DishSchema);