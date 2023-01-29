const express = require("express");
const morgan = require("morgan");
const connect = require("./config/database.config");
const TweetRouter = require("./routes/tweet.routes");
const app = express();

const startServer = () => {
  //* middlewares
  app.use(morgan("combined"));
  app.use(express.json());

  //* Routes
  app.use("/api", TweetRouter);

  app.listen(3000, async () => {
    //* connect to mongodb server
    await connect();
    console.log("Database started");

    console.clear();
    console.log("server listening on 3000");
  });
};

startServer();
