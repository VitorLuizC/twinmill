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
  if (req.params.name && req.params.email && req.params.password) {
    try {
      dao.add(req.params.name, req.params.email, req.params.password);
      res.statusCode = 200;
    } catch (err) {
      res.statusCode = 500;
      res.json({ error: err });
    }
  }
});

module.exports = router;
