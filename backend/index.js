const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const sequelize = require('./sequelize');
const User = require('./models/User'); // Import your Sequelize model

const app = express();

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  console.log('Connected to SQL Database');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(cors());

app.use('/users',re)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});