const Tweet = require("../models/tweet.model");

class TweetRepository {
  async create(tweet) {
    try {
      const response = await Tweet.create(tweet);
      return response;
    } catch (error) {
      throw error;
    }
  }
  async get() {
    try {
      const response = await Tweet.find({}).select({
        __v: 0,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
  async update(id, data) {
    try {
      const response = await Tweet.findByIdAndUpdate(id, data, { new: true });
      return response;
    } catch (error) {
      throw error;
    }
  }
  async delete(id) {
    try {
      const response = await Tweet.findByIdAndDelete(id, { new: true });
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getByLimitAndSkip(skip, limit) {
    try {
      //! limit() and skip() ==> For Pagination
      const response = await Tweet.find().skip(skip).limit(limit);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const response = await Tweet.findById(id).select({ __v: 0 });
      return {
        response,
        getEmailAndContent: response.getEmailAndContent,
      };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new TweetRepository();
