var orm = require("../config/orm.js");

//cb stands for the callback function. same as .then in sequelize.
var burger = {
    all: function (cb) {
        console.log("this is all burgers", cb)
        return orm.all("burgers");
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
            console.log("the burgerjs result create", res)
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            console.log("devoured burger", res)
            cb(res);
        });
    }
};


module.exports = burger;