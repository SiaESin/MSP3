const { DataTypes } = require('sequelize');
const sequelize = require('./path/to/sequelize');

const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: 'A great book!',
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: 'https://via.placeholder.com',
  },
});

module.exports = Book;