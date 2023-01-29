const TweetService = require("../services/tweet.services");

class TweetController {
  async createTweet(req, res) {
    try {
      const response = await TweetService.createTweet(req.body);
      return response;
    } catch (error) {
      return res.json({
        Error: "Internal Server Error",
      });
    }
  }
  async getAllTweet(req, res) {
    try {
      const response = await TweetService.getAllTweet();
      return res.json({
        response: response,
      });
    } catch (error) {
      return res.json({
        Error: "Internal Server Error",
      });
    }
  }
  async update(req, res) {
    try {
      const response = await TweetService.update(req.params.tweetId, req.body);
      return res.json({
        response: response,
      });
    } catch (error) {
      return res.json({
        Error: "Internal Server Error",
      });
    }
  }
  async deleteTweet(req, res) {
    try {
      const response = await TweetService.deleteTweet(req.params.tweetId);
      return res.json({
        response: response,
      });
    } catch (error) {
      return res.json({
        Error: "Internal Server Error",
      });
    }
  }
  async tweetById(req, res) {
    try {
      const response = await TweetService.tweetById(req.params.tweetId);
      return res.json({
        response: response,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        Error: "Internal Server Error",
      });
    }
  }
}

module.exports = new TweetController();
