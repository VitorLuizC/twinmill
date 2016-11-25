"use strict";

const express = require("express");

/**
 * Express router instance.
 */
let router = express.Router();

const author = require("./author.js");

router.get("/", (req, res) => {
  res.json({message: "Olá"});
});

router.use("/author", author);

module.exports = router;
