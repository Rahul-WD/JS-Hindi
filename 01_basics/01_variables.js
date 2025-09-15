const accountId = 112233
let accountEmail = "rahul@google.com"
var accountPassword = "112211"
accountCity = "Mumbai";
let accountState;

// cannot use accountId = 2 //Not allowed

accountEmail = "tyg@google.com"
accountPassword = "00000"
accountCity = "Thai";

/*
Do not use var
because of issues in block scope and functional scope
scope means - {xyz} 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
