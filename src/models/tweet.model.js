const { Mongoose, Schema, default: mongoose, model } = require("mongoose");

const tweetSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    virtuals: {
      getEmailAndContent: {
        get() {
          return { email: this.email, content: this.content };
        },
      },
    },
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
