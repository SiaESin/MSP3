const mongoose = require('mongoose')  

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
    image: String
})

const BookModel = mongoose.model('Book', bookSchema)
module.exports = BookModel 