"use strict";

const express = require("express");
const config = require("./config");
const router = require("./router");

/**
 * Express instance.
 */
let application = express();

application.use("/", router);

application.listen(config.server.port, config.server.port, config.server.callback);
