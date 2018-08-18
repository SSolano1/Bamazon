var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",

  database: "bamazon"
});

// make the connection
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  displayItems();

});  

// prompts the customer for an action
function displayItems() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.table(res);

    // Prompt for the input from the user
      inquirer.prompt ([
        {
        type: "input",
        name: "id",
        message: "Enter the ID of the the product you want to purchase?"
        },
        {
        type: "input",
        name: "quantity",
        message: "How many would you like to purchase?"  
        }
      ])

    });
    
}
  


  

