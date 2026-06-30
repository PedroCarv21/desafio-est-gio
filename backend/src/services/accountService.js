const { v4: uuid } = require("uuid");

const accounts = require("../database/accounts");

const CurrentAccount = require("../models/CurrentAccount");
const SavingsAccount = require("../models/SavingsAccount");

class AccountService {
    createAccount(holder, type, balance = 0) {
        if (!holder || holder.trim() === "") {
            throw new Error("Holder name is required.");
        }

        if (balance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }


        let account;
    
        if (type === "current") {
            account = new CurrentAccount(
                uuid(),
                holder,
                balance
            );
        }
    
        else if (type === "savings") {
            account = new SavingsAccount(
                uuid(),
                holder,
                balance
            );
        }
    
        else {
            throw new Error("Invalid account type.");
        }
    
        accounts.push(account);
    
        return account;
    }

    findAll() {
        return accounts;
    }

    findById(id) {
        const account = accounts.find(account => account.id === id);

        if (!account) {
            throw new Error("Account not found.");
        }

        return account;
    }

    withdraw(id, value) {
        const account = this.findById(id);

        account.withdraw(value);

        return account;
    }

    transfer(fromId, toId, value) {
        const origin = this.findById(fromId);
        const destination = this.findById(toId);

        origin.withdraw(value);
        destination.deposit(value);

        return {
            origin,
            destination
        };
    }
}

module.exports = new AccountService();