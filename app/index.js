"use strict";

const express = require("express");
const config = require("./config");
const router = require("./router");
const bodyParser = require("body-parser");

/**
 * Express instance.
 */
let application = express();

function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}

application.use(cors);
application.use(bodyParser.json());

application.use("/", router);

application.listen(config.server.port, config.server.port, config.server.callback);
