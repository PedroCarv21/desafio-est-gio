const CurrentAccount = require('./models/CurrentAccount');

const account = new CurrentAccount(
    1,
    "Pedro",
    100
);

console.log(account);