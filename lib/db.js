var mysql = require('mysql');

console.log("db connection made in lib/db.js");
var pool = mysql.createPool({
    connectionLimit : 100,
    host     : 'dmazzola.com',
    user     : 'mweary2',
    password : 'wear5238',
    database : 'test_db_mweary2'
});

module.exports = pool;