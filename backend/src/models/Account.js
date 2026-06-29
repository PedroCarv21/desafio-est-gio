class Account {
    constructor(id, holder, balance = 0) {
        this.id = id;
        this.holder = holder;
        this.balance = balance;
    }

    deposit(value) {
        this.balance += value;
    }
}

module.exports = Account;