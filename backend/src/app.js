const express = require("express");
const cors = require("cors");

const accountRoutes = require("./routes/accountRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(accountRoutes);

module.exports = app;

const errorHandler = require("./middlewares/errorHandler");

app.use(accountRoutes);

app.use(errorHandler);