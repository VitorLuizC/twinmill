"use strict";

const mysql2 = require("mysql2");
const config = require("../config");

/**
 * MySQL Server connection.
 */
let database = mysql2.createConnection(config.database);

module.exports = database;
