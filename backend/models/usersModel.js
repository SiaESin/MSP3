const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, index: true, unique: true},
    password: {type: String, required: true}
    
})

const User = mongoose.model('User', userSchema)
User.createIndexes();
module.exports = User; 