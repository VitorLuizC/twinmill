"use strict";

const database = require("../database");

let model = { selectAll, insert };

/**
 * Return all the active Authors from database.
 * @returns {Array<Object>}
 */
function selectAll() {
  var data;

  const QUERY = `
    SELECT *
      FROM author`;

  database.query(QUERY, (err, results) => {
    if (err) throw err;

    data = results;
  });

  return data;
}

/**
 * Insert a new author in the database.
 * @param {string} name
 * @param {string} email
 * @param {string} password
 */
function insert(name, email, password) {
  var data;

  const QUERY = `
    INSERT INTO author (
      name,
      email,
      password
    ) VALUES (?, ?, ?)`;

  database.execute(QUERY, [name, email, password], (err, results) => {
    if (err) throw err;

    data = results;
  });

  return data;
}

/* TODO: Add the default created and active values
 * CREATE TABLE author (
 *   \`id\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 *   name VARCHAR(70) not null,
 *   email VARCHAR(255) not null,
 *   password VARCHAR(16) not null,
 *   created DATE not null,
 *   active BOOLEAN not null
 * )ENGINE=InnoDB;
 */

module.exports = model;
