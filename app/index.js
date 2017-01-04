"use strict";

const express = require("express");
const config = require("./config");
const router = require("./router");

/**
 * Express instance.
 */
let application = express();

application.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  console.log('Time:', Date.now());
  console.log('Params: ', req.params);
  next();
});

application.use("/", router);

application.listen(config.server.port, config.server.port, config.server.callback);
