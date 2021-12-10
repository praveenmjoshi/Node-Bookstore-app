const express = require('express')
const router = express.Router()

const { getAllBooks, getBook, searchBooks } = require('../services/books')

router.get('/search', searchBooks)
router.get('/list', getAllBooks)
router.get('/:id', getBook)

module.exports = router