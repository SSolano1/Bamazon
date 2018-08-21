var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");
const chalk =require("chalk")

var  itemChosen = ""; 

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
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      console.table(results);

    // Prompt for the input from the user
      inquirer.prompt ([
        {
        type: "input",
        name: "userChoice",
        message: "Enter the ID of the the product you want to purchase?"
        },
        {
        type: "input",
        name: "quantity",
        message: "How many would you like to purchase?"  
        }
      ])
      .then(function(answer) {
      
        
          for (var i=0; i < results.length; i++) {
              if(results[i].ID === parseInt(answer.userChoice))
              {
                itemChosen = results[i];

              }
          }
          // console.log ("outside loop" + itemChosen[0]);
        if (parseInt(answer.quantity) > itemChosen.Stock_Quantity) {
          console.log(chalk.red("We don't have enough Inventory. \nPlease select a different amount."));
        } 
        else {
          var updatedQuantity = parseInt(itemChosen.Stock_Quantity) - parseInt(answer.quantity);
          console.log(chalk.green("Order is fulfilled!  Your total is " + parseFloat(itemChosen.Price * parseInt(answer.quantity))
        .toFixed(2)));
        
        connection.query("UPDATE products SET ? WHERE ?",
        [{
            Stock_Quantity: updatedQuantity      },
        {
            ID: answer.userChoice
        }],
        function (err) {
            if (err) throw err; 
      })

      }
           
      displayItems();
    });
    
});
}
  


 
