const express = require('express')
const router = express.Router()  
const BookModel = require('../models/bookModel.js')

router.get('/home', (req, res) => {
    res.send('Books Rule!')
})

router.get('/books', async (req, res) => {
    const books = await BookModel.findAll()
    res.send(books)
})

router.get('/books/:name', async (req, res) => {
    const book = await BookModel.findOne({name: req.params.name})
    res.send(book)
})
router.get('*', (req, res) => {
    res.status(404).send('Not Found')
})

module.exports = router