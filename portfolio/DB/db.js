var mysql = require('mysql');
var db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '336677',
  database : 'portfolioweb',
});
db.connect();

module.exports = db;