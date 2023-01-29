const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  content: {
    type: String,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
