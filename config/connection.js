var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8000,
        user: "root",
        password: process.env.MYSQL_PASSWORD,
        database: "burgers_db"
    });
};

connection.connect(function (err) {
    if (err) {
        console.log("Error connecting" + err.stack);
        return
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;