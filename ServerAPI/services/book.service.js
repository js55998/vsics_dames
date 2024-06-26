const BookModel = require('../models/book.model');

const create = async (bookPayload) => {
  const createdBook = await BookModel.create(bookPayload);
  return createdBook;
};

const getAll = async () => {
  const books = await BookModel.find().select('_id title author summary');
  return books;
};

const getById = async (bookId) => {
  const book = await BookModel.findById(bookId).select('_id title author summary');
  return book;
};                                                                

const updateById = async (bookId, updatePayload) => {
  const updatedBook = await BookModel.findByIdAndUpdate(bookId, updatePayload, {
    new: true,
  });
  return updatedBook;
};

const deleteById = async (bookId) => {
  const deleteBook = await BookModel.findByIdAndDelete(bookId);
  return deleteBook;
};
module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
