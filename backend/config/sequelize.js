const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', 
  port: process.env.DB_PORT || 3001, // Change the port if necessary
});

module.exports = sequelize;