// var mysql_package = require('mysql');
// var connection_data = mysql_package.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "8520"
//   });
//   connection_data.connect(function(err) {
//     console.log("Connected to XAMPP Server!");
//   });

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "8520",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});