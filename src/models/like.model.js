const mongoose = require("mongoose");

const { Schema } = mongoose;

const likeSchema = new Schema({
  docModel: {
    type: String,
    required: true,
    enum: ["Tweet", "Comment"],
  },
  likeable: {
    type: Schema.Types.ObjectId,
    required: true,
    // Instead of a hardcoded model name in `ref`, `refPath` means Mongoose
    // will look at the `onModel` property to find the right model.
    refPath: "docModel",
  },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;

/**
 *  Dynamic References via `refPath`
 
    Mongoose can also populate from multiple collections based on the value of a property in the document.
    Let's say you're building a schema for storing comments.
    A user may comment on either a blog post or a product.
 */
