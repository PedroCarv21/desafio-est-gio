const Account = require("./Account");

class SavingsAccount extends Account {

    withdraw(value) {
        if (value <= 0) {
            throw new Error("The withdrawal amount must be greater than zero.");
        }

        if (this.balance < value) {
            throw new Error("Insufficient balance.");
        }

        this.balance -= value;
    }

    get type() {
        return "savings";
    }

}

module.exports = SavingsAccount;