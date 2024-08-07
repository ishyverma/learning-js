const accountId = 144553;
let accountEmail = "shyshy@gmail.com";
var accountPassword = "shyam"; // Prefer to not use var.  
accountCity = "Delhi"; // Prefer to not use this method.
// accountId = 2; // Not allowed because value is constant.

let accountState; //This is called initialisation.

accountEmail = "shyamverma@gmail.com";
accountPassword = "verma";

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity]); //It will log the all values in the form of table.
console.log(accountState); // This will return undefined. 
