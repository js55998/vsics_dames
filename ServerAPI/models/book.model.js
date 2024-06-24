const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    summary: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const BookModel = mongoose.model('book', BookSchema);

module.exports = BookModel;
