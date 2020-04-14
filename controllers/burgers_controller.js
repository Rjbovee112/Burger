var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", function (req, res) {
    res.render('index', {
        showTitle: true,
        burgers: async function () {
            const burgers = [];


            const data = await burger.all();
            data.forEach(function (burger) {
                burgers.push({
                    burger_name: burger.burger_name,
                })
            })
            console.log(burgers);


            console.log(burgers);
            return burgers;
        }
    });
});

router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        var burgersObject = {
            burger: data
        };
        res.render("index", burgersObject)
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, false
    ], function () {
        res.redirect("/burgers");
    });
});

router.post("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, condition, function (data) {
        res.redirect("/burgers");
    });
});

module.exports = router;