// var mysql_package = require('mysql');
// var connection_data = mysql_package.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "8520"
//   });
//   connection_data.connect(function(err) {
//     console.log("Connected to XAMPP Server!");
//   });

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "8520",
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

var mysql_package = require('mysql');
// Create the connection using the server,username and password.
//In my scenario - server is the localhost,
//username is root,
//password is empty.
var connection_data = mysql_package.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

connection_data.connect(function(err) {
  console.log("Connected to XAMPP Server!");
//sql query to create a database named  facility in XAMPP
  connection_data.query("CREATE DATABASE facility", function (err, result) {
//Display message in our console.
    console.log("Database-facility is created");
  });
});   
