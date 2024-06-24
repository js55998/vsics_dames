const mongoose = require('mongoose');
const bookService = require('../services/book.service');
const addBook = async (req, res) => {
  const { title, author, summary } = req.body;
  try {
    await bookService.create({ title, author, summary });

    return res.status(200).send({ data: 'success', error: null });
  } catch (error) {
    if (error.keyValue.title === title) {
      return res.status(400).send({ data: 'failure', error: 'duplicate title' });
    }
    return res.status(500).send({ data: 'failure', error: 'Internal server error' });
  }
};







const getAllBook = async (req, res) => {
  try {
    const books = await bookService.getAll();
    if (!books) {
      return res.status(200).send({ data: [], error: null });
    }
    return res.status(200).send({ data: books, error: null });
  } catch (error) {
    return res.status(500).send({ data: null, error: 'internal server error' });
  }
};


const getBookById = async (req, res) => {
  const bookId = req.params.id;

  if (mongoose.isValidObjectId(bookId)) {
    try {
      const book = await bookService.getById(bookId);
      if (!book) {
        return res.status(400).send({ data: null, error: 'No book found by the id' });
      }
      return res.status(200).send({ data: book, error: null });
    } catch (error) {
      return res.status(500).send({ data: null, error: 'internal server error' });
    }
  }
  return res.status(400).send({ data: null, error: 'id is not valid' });
};
const deleteBookById = async (req, res) => {
  const bookId = req.params.id;

  if (mongoose.isValidObjectId(bookId)) {
    try {
      const deleteBook = await bookService.deleteById(bookId);
      if (!deleteBook) {
        return res.status(400).send({ data: null, error: 'No book found by the id' });
      }
      return res.status(200).send({ data: 'success', error: null });
    } catch (error) {
      return res.status(500).send({ data: null, error: 'internal server error' });
    }
  }
  return res.status(400).send({ data: null, error: 'id is not valid' });
};
const updateBook = async (req, res) => {
  const bookId = req.params.id;

  if (mongoose.isValidObjectId(bookId)) {
    try {
      const { title, author, summary } = req.body;
      const book = await bookService.getById(bookId);
      if (!book) {
        return res.status(400).send({ data: null, error: 'No book found by the id' });
      }
      const updatedBook = await bookService.updateById(bookId, {
        title,
        author,
        summary,
      });
      return res.status(200).send({ data: updatedBook, error: null });
    } catch (error) {
      return res.status(500).send({ data: null, error: 'internal server error' });
    }
  }
  return res.status(400).send({ data: null, error: 'id is not valid' });
};

module.exports = {
  addBook,
  getAllBook,
  getBookById,
  deleteBookById,
  updateBook,
};
