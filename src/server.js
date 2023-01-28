const express = require("express");
const connect = require("./config/database.config");
const Tweet = require("./models/tweet.model");
const TweetRepository = require("./repository/tweet");

const app = express();

const startServer = () => {
  app.listen(3000, async () => {
    console.clear();
    console.log("server listening on 3000");

    //! connect to mongodb server
    try {
      await connect();
      console.log("Database started");
    } catch (error) {
      console.log("database error: " + error);
    }

    //TODO Just to test
    let response = await TweetRepository.get();
    // console.log(response);
    response = await TweetRepository.getByLimitAndSkip(2, 3);
    console.log("============>>");
    console.log(response);
    response = await TweetRepository.getById("63d4f0d0a4f487bcb73e512d");
    console.log(response);
  });
};

startServer();
