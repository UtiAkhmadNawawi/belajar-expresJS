// Import Sequelize
const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('expresJs', 'root', 'Oktoober11@mysql', {
  dialect: 'mysql',
  host: 'localhost',
});

// Define the Actor model
const Actor = sequelize.define('Actor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birth_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('male', 'female'),
    allowNull: false,
  },
});

// Synchronize the model with the database
sequelize.sync()
  .then(() => {
    console.log('Actor model synchronized with database');
  })
  .catch((error) => {
    console.error('Unable to synchronize the actor model with database', error);
  });

// Export the Actor model
module.exports = Actor;
