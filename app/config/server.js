"use strict";

const config = {
  port: 9000,
  host: "localhost",
  callback: logServerInitialization
};

/**
 * Logs the default application's startup message
 */
function logServerInitialization() {
  console.log(`
    Application was started!
    Application is listening at ${config.host}:${config.port}...
  `);
}

module.exports = config;
