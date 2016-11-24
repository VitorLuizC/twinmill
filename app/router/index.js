"use strict";

const express = require("express");

/**
 * Express router instance.
 */
let router = express.Router();

router.get("/", (req, res) => {
	res.json({message: "Olá"});
});

module.exports = router;
