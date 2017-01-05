"use strict";

const express = require("express");
const dao = require("../model/_author.js");

let router = express.Router();

router
  .get("/", getAuthor)
  .post("/", postAuthor);

async function getAuthor(req, res) {
  try {
    res.statusCode = 200;
    res.json(await dao.get());
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: err });
  }
}

async function postAuthor(req, res) {
  try {
    var { name, email, password } = req.body;

    if (!name || !email || !password)
      throw new Error("Invalid requisition param.");

    const author = await dao.add(name, email, password);
    res.statusCode = 200;
    res.json(author);
  } catch (err) {
    res.statusCode = 500;
    res.json({ error: err });
  }
}

module.exports = router;
