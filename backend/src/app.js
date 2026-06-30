const express = require("express");
const cors = require("cors");

const accountRoutes = require("./routes/accountRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use(accountRoutes);

app.use(errorHandler);

module.exports = app;