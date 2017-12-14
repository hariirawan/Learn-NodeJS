var mysql = require('mysql');

//Mengoneksikan dengan database;
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Nodejs'
});

module.exports.db = connection ;