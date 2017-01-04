"use strict";

const express = require("express");
const dao = require("../model/author.js");

let router = express.Router();

router.get("/", (req, res) => {
  try {
    res.statusCode = 200;
    res.json(dao.get());
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: err });
  }
});

router.post("/", (req, res) => {
  try {
    var { name, email, password } = req.params;

    if (!name || !email || !password)
      throw new Error("Invalid requisition param.");

    dao.add(name, email, password);
    res.statusCode = 200;
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: err });
  }
});

module.exports = router;
