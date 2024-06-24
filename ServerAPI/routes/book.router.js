const Router = require('express').Router();
const {
  addBook,
  getAllBook,
  getBookById,
  deleteBookById,
  updateBook,
} = require('../controllers/book.controller');

Router.get('/all-book', getAllBook);
Router.get('/:id', getBookById);
Router.post('/add-book', addBook);
Router.put('/update-book/:id', updateBook);
Router.delete('/:id', deleteBookById);

module.exports = Router;