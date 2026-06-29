const Account = require("./Account");

class CurrentAccount extends Account {

    withdraw(value) {

        const total = value + 1;

        if (this.balance - total < -500) {
            throw new Error("Account limit exceeded.");
        }

        this.balance -= total;
    }

    get type() {
        return "current";
    }

}

module.exports = CurrentAccount;