const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
        }
    }, { collection: 'Roles'})
);

module.exports = Role;