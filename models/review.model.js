const mongoose = require('mongoose');

const Review = mongoose.model(
    "Review",
    new mongoose.Schema({
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        dish: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Dish"
        },
        content: {
            type: String,
            required: true,
        },
    }, { collection: 'Reviews'})
)

module.exports = Review;