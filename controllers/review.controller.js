const db = require('../models');
const Review = db.review;

async function addReview(request, response) {
    const newReview = new Review(request.body)
        .populate('dish')
        .exec(function (err, dish) {
            newReview.dish = dish;
        }).populate('author')
        .exec(function (err, user) {
            newReview.author = user;
        });
    
    try {
        await newReview.save();
        response.status(200).send(newReview);
    } catch (error) {
        response.status(500).send(error);
    }
}

async function getReviews(request, response) {
    const reviews = await Review.find({});
}

module.exports = { addReview, getReviews };