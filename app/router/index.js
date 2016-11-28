"use strict";

const express = require("express");
const author = require("./author.js");

/**
 * Express's Router instance.
 */
let router = express.Router();

router.get("/", (req, res) => {
  res.json({});
});

router.use("/author", author);

module.exports = router;
