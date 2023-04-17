var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '336677',
  database : 'portfolioweb',
  // port:'3000'
});
  
connection.connect();
  
connection.query('SELECT * FROM post', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();