"use strict";

const server = require("./server.js");
const database = require("./database.js");

/**
 * General configuration's object.
 */
const config = { server, database };

module.exports = config;
