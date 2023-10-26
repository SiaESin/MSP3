require('dotenv').config()
import mongoose from "mongoose";

mongoose.connect("process.env.MONGO_URI", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Book = require('./bookModel')
module.exports.User = require('./usersModel')