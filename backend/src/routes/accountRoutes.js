const express = require("express");

const accountController = require("../controllers/accountController");

const router = express.Router();

router.post("/accounts", accountController.createAccount);

router.get("/accounts", accountController.findAll);

router.get("/accounts/:id", accountController.findById);

router.post("/accounts/:id/withdraw", accountController.withdraw);

router.post("/accounts/transfer", accountController.transfer);

module.exports = router;
