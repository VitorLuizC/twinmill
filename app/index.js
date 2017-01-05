"use strict";

const express = require("express");
const { server } = require("./config");
const router = require("./router");
const bodyParser = require("body-parser");

/**
 * Express instance.
 */
express()
  .use(cors)
  .use(bodyParser.json())
  .use("/", router)
  .listen(server.port, server.port, server.callback);

function cors(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}
