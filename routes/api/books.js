const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Route corresponding /api/books
router.route('/')
  .get(booksController.findAll)
  .post(booksController.create);

  // Route corresponding to /api/books/:id
  router.route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

  module.exports = router;
