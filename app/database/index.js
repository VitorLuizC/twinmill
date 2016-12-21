"use strict";

const mysql2 = require("mysql2");
const config = require("../config");

/**
 * MySQL Server connection.
 */
const connection = mysql2.createConnection(config.database);

/**
 * Execute a query.
 * @param {string} query
 * @param {Array<any>} [fields]
 * @returns {Promise<string>}
 */
function execute(query, fields) {
  return new Promise((resolve, reject) => {
    const callback = (error, data) => (error) ? reject(error)
                                              : resolve(data);

    if (fields instanceof Array)
      connection.query(query, fields, callback);
    else
      connection.query(query, callback);
  });
}

module.exports = { connection, execute };
