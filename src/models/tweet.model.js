const mongoose = require("mongoose");
const { Schema } = mongoose;
const tweetSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true }
);

tweetSchema.pre("save", function (next) {
  console.log("pre");
  next();
});

tweetSchema.post("save", function () {
  console.log("post");
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
