"use strict";

const database = require("../database");
const Author = require("./Author.js");

const TABLE_NAME = "author";
const SELECT_ALL = `SELECT * FROM ${TABLE_NAME}`;
const INSERT = `INSERT INTO ${TABLE_NAME}(name, email, password, created) VALUES(?, ?, ?, NOW())`;


class AuthorDAO {
  getAll() {
    database.query(SELECT_ALL, (err, authors, fields) => {
      if (err) {
        throw err;
      }

      console.log(authors);
      console.log(fields);
    });
  }

  add(name, email, password) {
    database.execute(INSERT, [name, email, password], (err, authors, fields) => {
      if (err) {
        throw err;
      }

      console.log(authors);
      console.log(fields);
    });
  }
}

const createTable = `
  CREATE TABLE author (
    \`id\` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(70) not null,
    email VARCHAR(255) not null,
    password VARCHAR(16) not null,
    created DATE not null
  )ENGINE=InnoDB;
`;

module.exports = new AuthorDAO();
