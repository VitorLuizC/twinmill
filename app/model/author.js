"use strict";

const { execute } = require("../database");

/**
 * Return all the active authors from database.
 * @returns {Array<Object>}
 */
async function get() {
  const QUERY = `
    SELECT *
      FROM author
      WHERE active = 1`;

  return await execute(QUERY);
}

/**
 * Insert a new author in the database.
 * @param {string} name
 * @param {string} email
 * @param {string} password
 */
async function add(name, email, password) {
  const INSERT_QUERY = `
    INSERT INTO author (
      name,
      email,
      password
    ) VALUES (?, ?, ?)`;

  const SELECT_QUERY = `
    SELECT *
      FROM author
      WHERE id = (SELECT LAST_INSERT_ID())`;

  await execute(INSERT_QUERY, [name, email, password]);

  return await execute(SELECT_QUERY);
}

module.exports = { add, get };
