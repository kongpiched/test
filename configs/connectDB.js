const dotenv = require("dotenv");
dotenv.config().parsed;
const config = {
  db: {
    // host: "localhost",
    host: process.env.HOST,
    port: process.env.PORT_DB,
    // user: "root",
    // password: "root",
    user: "root",
    password: "root",
    // requestTimeout: 30000,
    database: "world",
    charset: "utf8mb4",
  },
};

module.exports = config;