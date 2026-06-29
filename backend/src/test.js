const SavingsAccount = require("./models/SavingsAccount");

const savings = new SavingsAccount(
    2,
    "Maria",
    100
);

savings.withdraw(30);

console.log(savings);