const Account = require("./Account");

class SavingsAccount extends Account {

    withdraw(value) {

        if (this.balance < value) {
            throw new Error("Insufficient balance.");
        }

        this.balance -= value;
    }

}

module.exports = SavingsAccount;