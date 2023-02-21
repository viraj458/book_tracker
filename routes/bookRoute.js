const express = require('express')
const {
    allBooks,
    book,
    addBook,
    deleteBook,
    updateBook
} = require('../controller/bookController')
const router = express.Router()


//Get all books
router.get('/', allBooks)

//Get a single book
router.get('/:id', book)

//Create a book
router.post('/', addBook)

//Delete a book
router.delete('/:id', deleteBook)

//Update a book
router.patch('/:id', updateBook)

module.exports = router