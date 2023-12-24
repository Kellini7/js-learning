const accountId = 141414
let accountEmail ="ke@gmail.com"
var accountPassword = "12345"

console.table([accountId, accountEmail, accountPassword]);

/* Don't use var because of a issue in scope */

console.log(accountId);