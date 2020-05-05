var mysql = require("mysql");
require("dotenv").config()


var connection; 
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else{
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "6963",
    database: "burgers_db"

    //process.env.password
  
  
   });
 }

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;















// var connection = mysql.createConnection(
//   process.env.JAWSDB_URL ||{
//   host: "localhost",
//   port: 3306,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE
// });



//     // host: process.env.HOST,
//     // port: 3306,
//     // user: process.env.USER,
//     // password: process.env.PASSWORD,
//     // database: process.env.DATABASE