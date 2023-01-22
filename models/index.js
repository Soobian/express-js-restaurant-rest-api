const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.dish = require("./dish.model");
db.review = require("./review.model");

db.ROLES = ["guest", "client", "manager", "admin"];

module.exports = db;