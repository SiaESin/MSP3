require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Books Rule!')
})

app.listen(process.env.PORT)
