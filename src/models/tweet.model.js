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

tweetSchema.pre("save", function (next) {
  this.content = this.content + "saturday";
  console.log("pre");
  next();
});

tweetSchema.post("save", function () {
  console.log("post");
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
