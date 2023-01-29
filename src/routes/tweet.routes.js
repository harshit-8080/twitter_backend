const express = require("express");
const tweetController = require("../controllers/tweet.controller");

const TweetRouter = express();

TweetRouter.post("/tweets", tweetController.createTweet);

TweetRouter.get("/tweets", tweetController.getAllTweet);

TweetRouter.patch("/tweets/:tweetId", tweetController.update);

TweetRouter.delete("/tweets/:tweetId", tweetController.deleteTweet);

TweetRouter.get("/tweets/:tweetId", tweetController.tweetById);

module.exports = TweetRouter;
