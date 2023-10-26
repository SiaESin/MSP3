import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/auth.js';
import { bookRouter } from './controllers/bookstore.js';
const app = express();

app.use(express.json());
app.use(cors());

app.use('/register', userRouter);
app.use('/books', bookRouter);

// require('dotenv').config();
mongoose.connect(
  'process.env.MONGO_URI',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('connected to MongoDB');
  }
);
app.listen(process.env.PORT, () => console.log('Server running!'))



// const express = require('express')
// const dotenv = require('dotenv').config()
// const cors = require('cors')
// const methodOverride = require('method-override')
// const mongoose = require('mongoose')
// const app = express()

// app.use(express.json())
// app.use(express.static('public'))
// app.use(express.urlencoded({extended: true}))
// app.use('/', require('./routes/auth'))
// app.use(cors())
// app.use(methodOverride('_method'))
// app.use('/', require('./controllers/bookstore'))
//             // app.use('/', require('./controllers/users'))

//             // app.get('/', (req, res) => {
//                 //     res.render('home')
//                 // })

//                 // const PORT = process.env.PORT || 3001

//                 //database connection
//     mongoose.connect("process.env.MONGO_URI", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true},
//         () => {
//             console.log('connected to MongoDB')
//         }
//         )
// const auth = require('./routes/auth')
// app.use('/auth', auth)

// app.listen(process.env.PORT, () => console.log('Server running!'))
