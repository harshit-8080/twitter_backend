const TweetRepository = require("../repository/tweet.repo");

class TweetService {
  async createTweet(tweet) {
    try {
      const response = await TweetRepository.create(tweet);
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getAllTweet() {
    try {
      const response = await TweetRepository.get();
      return response;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const response = await TweetRepository.update();
      return response;
    } catch (error) {
      throw error;
    }
  }
  async deleteTweet(id) {
    try {
      const response = await TweetRepository.delete(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
  async tweetById(id) {
    try {
      const response = await TweetRepository.getById(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new TweetService();
