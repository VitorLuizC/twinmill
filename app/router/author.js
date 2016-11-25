"use strict";

const express = require("express");
const dao = require("../model/AuthorDAO.js");

let router = express.Router();

router
  .get("/", (req, res) => {
    res.json(dao.getAll());
  })

  .post("/", (req, res) => {
    dao.add(req.params.name, req.params.email, req.params.password);
    res.statusCode = 200;
  });

module.exports = router;
