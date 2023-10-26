const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()

//database connection
mongoose.connect("process.env.MONGO_URI", {
    useNewUrlParser: true,
    useUnifiedTopology: true},
    () => {
        console.log('connected to MongoDB')
    }   
)
app.use('/', require('./routes/auth'))
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(methodOverride('_method'))
app.use('/', require('./controllers/bookstore'))
// app.use('/', require('./controllers/users'))

app.get('/', (req, res) => {
    res.render('home')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});


