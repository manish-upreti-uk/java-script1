const accountId = 144553
let accountEmail= "manish@gmail.com"
var accountPassword ="123345"
accountCity = "dehradun"

// accountId =// 2 not allowed
console.log(accountId);


/*

Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "hc@gmail.com"
accountPassword = "102389389798"
accountCity = "ranikhet"

console.table([accountId,accountEmail,accountPassword,accountCity])