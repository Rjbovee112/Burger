var connection = require("./connection.js");

var orm = {
    selectALL: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function () ,

    updateOne: 
}

module.exports = orm;












//copied code over from 13//
selectWhere: function (tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
        if (err) throw err;
        console.log(result);
    });
},
leftJoin: function (whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString = "SELECT ?? FROM ?? AS tOne";
    queryString += " LEFT JOIN ?? AS tTwo";
    queryString += " ON tOne.?? = tTwo.??";

    console.log(queryString);

    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function (
        err,
        result
    ) {
        if (err) throw err;
        console.log(result);
    });
}
};

module.exports = orm;
