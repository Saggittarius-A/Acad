const mysql= require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shruti@2002',
    database: 'gallery',
    multipleStatements: true
});
module.exports = db;