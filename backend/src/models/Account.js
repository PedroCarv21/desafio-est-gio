class Account {
    constructor(id, holder, balance = 0) {
        this.id = id;
        this.holder = holder;
        this.balance = balance;
    }

    deposit(value) {
        if (value <= 0) {
            throw new Error("The deposit amount must be greater than zero.");
        }

        this.balance += value;
    }

    withdraw() {
        throw new Error("The withdraw() method must be implemented by the subclass.");
    }

    get type() {
        return this.constructor.name;
    }

    toJSON() {
        return {
            id: this.id,
            holder: this.holder,
            balance: this.balance,
            type: this.type
        };
    }
}

module.exports = Account;