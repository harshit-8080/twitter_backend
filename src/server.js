const express = require("express");
const connect = require("./config/database.config");

const app = express();

const startServer = () => {
  app.listen(3000, async () => {
    console.log("server listening on 3000");
    try {
      await connect();
      console.log("Database started");
    } catch (error) {
      console.log("database error: " + error);
    }
  });
};

startServer();
