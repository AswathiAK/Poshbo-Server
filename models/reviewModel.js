const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel',
      // required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // required: true
    },
    rating: {
      type: Number,
      // required: true
    },
    reviewTitle: {
      type: String,
      // required: true
    },
    comment: {
      type: String,
      // required: true
    }
  },
  {timestamps:true}
);

module.exports = mongoose.model('Review',reviewSchema);