const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/', require('./controllers/bookstore'))
app.use('/', require('./controllers/users'))

app.get('/', (req, res) => {
    res.render('home')
})

require('dotenv').config()
const PORT = process.env.PORT || 3001
mongoose.connect("process.env.MONGO_URI", {
    useNewUrlParser: true,
    useUnifiedTopology: true},
    () => {
        console.log('connected to MongoDB')
    }   
)

app.listen(process.env.PORT, () => console.log('Server running!'))
