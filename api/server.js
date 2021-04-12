const express = require("express");
const accountsRouter = require("../api/accounts/accounts-router");

const server = express();

server.use(express.json());

accountsRouter.use('/api/accounts', accountsRouter);

module.exports = server;
