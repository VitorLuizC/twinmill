"use strict";

const { execute } = require("../database");

/**
 * Return all the active Authors from database.
 * @returns {Array<Object>}
 */
async function get() {
  const QUERY = `
    SELECT *
      FROM author`;

  return await execute(QUERY);
}

/**
 * Insert a new author in the database.
 * @param {string} name
 * @param {string} email
 * @param {string} password
 */
async function add(name, email, password) {
  const QUERY = `
    INSERT INTO author (
      name,
      email,
      password
    ) VALUES (?, ?, ?)`;

  return await execute(QUERY, [name, email, password]);
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

module.exports = { add, get };
