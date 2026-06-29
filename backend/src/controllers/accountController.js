const accountService = require("../services/accountService");

class AccountController {
    createAccount(req, res, next) {

        try {
    
            const { holder, type, balance } = req.body;
    
            const account = accountService.createAccount(
                holder,
                type,
                balance
            );
    
            return res.status(201).json(account);
    
        } catch (error) {
    
            next(error);
    
        }
    
    }

    findAll(req, res) {

        const accounts = accountService.findAll();
    
        return res.json(accounts);
    
    }

    findById(req, res, next) {

        try {
    
            const account = accountService.findById(
                req.params.id
            );
    
            return res.json(account);
    
        } catch (error) {
    
            next(error);
    
        }
    
    }

    withdraw(req, res, next) {

        try {
    
            const account = accountService.withdraw(
                req.params.id,
                req.body.value
            );
    
            return res.json(account);
    
        } catch (error) {
    
            next(error);
    
        }
    
    }

    transfer(req, res, next) {

        try {
    
            const {
                fromId,
                toId,
                value
            } = req.body;
    
            const result = accountService.transfer(
                fromId,
                toId,
                value
            );
    
            return res.json(result);
    
        } catch (error) {
    
            next(error);
    
        }
    
    }
}

module.exports = new AccountController();