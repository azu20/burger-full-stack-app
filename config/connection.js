// Set up MySQL connection.
const mysql = require("mysql");
const util = require("util");


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "New2020ya$!",
        database: "burgers_db"
    });
};



// Make connection.
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);

        return;
    }
    console.log("connected as id " + connection.threadId);
});
connection.query = util.promisify(connection.query);