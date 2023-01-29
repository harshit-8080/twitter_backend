const express = require("express");
const connect = require("./config/database.config");
const TweetRouter = require("./routes/tweet.routes");
const app = express();

const startServer = () => {
  // middlewares

  app.use("/api", TweetRouter);

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
  });
};

startServer();
