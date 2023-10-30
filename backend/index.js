
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const { Sequelize } = require('sequelize')

// SEQUELIZE CONNECTION

require('dotenv').config();
const sequelize = new Sequelize(process.env.PG_URI)
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(cors());

// Sync Sequelize models with the database
try {
  sequelize.authenticate()
  console.log(`Connected with Sequelize at ${process.env.PG_URI}`)  
} catch (error) {
  console.log(`Unable to connect to PG: ${error}`) 
} 

// app.use('/users', require('./controllers/users'));
// app.use('/books', require('./controllers/bookstore'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});