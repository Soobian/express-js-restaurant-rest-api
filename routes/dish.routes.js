const controller = require("../controllers/dish.controller");
const upload = require("../config/storage.config.js");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.route("/dishes")
        .get(controller.getAllDishes)
        .post(upload.single("image"), controller.createDish);
    
    app.route("/dishes/:id")
        .get(controller.readDish)
        .put(controller.updateDish)
        .delete(controller.deleteDish);
};