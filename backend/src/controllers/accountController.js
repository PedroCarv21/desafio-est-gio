const accountService = require("../services/accountService");

class AccountController {
    createAccount(req, res) {

        try {
    
            const { holder, type, balance } = req.body;
    
            const account = accountService.createAccount(
                holder,
                type,
                balance
            );
    
            return res.status(201).json(account);
    
        } catch (error) {
    
            return res.status(400).json({
                message: error.message
            });
    
        }
    
    }

    findAll(req, res) {

        const accounts = accountService.findAll();
    
        return res.json(accounts);
    
    }

    findById(req, res) {

        try {
    
            const account = accountService.findById(
                req.params.id
            );
    
            return res.json(account);
    
        } catch (error) {
    
            return res.status(404).json({
                message: error.message
            });
    
        }
    
    }

    withdraw(req, res) {

        try {
    
            const account = accountService.withdraw(
                req.params.id,
                req.body.value
            );
    
            return res.json(account);
    
        } catch (error) {
    
            return res.status(400).json({
                message: error.message
            });
    
        }
    
    }

    transfer(req, res) {

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
    
            return res.status(400).json({
                message: error.message
            });
    
        }
    
    }
}

module.exports = new AccountController();