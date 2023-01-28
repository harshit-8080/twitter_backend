const express = require("express");
const connect = require("./config/database.config");
const Tweet = require("./models/tweet.model");
const TweetRepository = require("./repository/tweet");

const app = express();

const startServer = () => {
  app.listen(3000, async () => {
    console.log("server listening on 3000");

    //! connect to mongodb server
    try {
      await connect();
      console.log("Database started");
    } catch (error) {
      console.log("database error: " + error);
    }

    //TODO Just to test
    const response = await TweetRepository.get();
    console.log(response);
  });
};

startServer();
