var connection = require("./connection");

var orm = {
    selectALL: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
            console.log("selected all" + table);
        });
    },

    insertOne: function (table, burgerName, devoured) {
        var query = "INSERT INTO ??  (burger_name, devoured) VALUES ('??', ??);"
        connection.query(query, [table, burgerName, devoured])
        if (err) throw err;
        console.log(result);
        console.log("Add complete");
    },

    updateOne: function (table, burgerName, id) {
        var query = "update ?? set burger_name = '??', devoured = ?? where burger_id = ?"
        connection.query(query, [table, burgerName, id], function (err, result) {
            if (err) throw err;
            console.log(results);
            console.log("Update complete");
        })
    }

}

module.exports = orm;









