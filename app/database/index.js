"use strict";

const mysql = require("mysql2");
const config = require("../config");

/**
 * MySQL Server connection.
 */
let connection = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database
});

module.exports = connection;
