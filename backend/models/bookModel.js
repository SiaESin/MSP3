const mongoose = require('mongoose')  

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    date: {type: Date, default: Date.now},
    description: {type: String, default: 'A great book!'},
    price: {type: Number, required: true},
    image: {type: String, default: 'https://via.placeholder.com' }
})

const BookModel = mongoose.model('Book', bookSchema)
module.exports = BookModel 