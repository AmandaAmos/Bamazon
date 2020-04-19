
//initialize all the things
var mysql = require("mysql");
var fs = require("fs");
var inquirer = require("inquirer");

//create connection with MySQL
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "product_db",
})

//connect to mysql and mysql database
connection.connect(function(err){
    if (err) throw err;
    start();
})

//function for prompting the user to do something

function start() {
    inquirer
    .prompt({
        name: "typeofproduct",
        type: "list",
        message: "What is the product ID you'd like?",
    })
}