//3) inserción y actualización de varios registros.

const Sequelize = require('sequelize');

const sequelize = new Sequelize('clase_4', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }) 
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'users'
});

sequelize.sync()
  .then(() => User.bulkCreate([{
    firstName: 'Valeria',
    lastName: 'Lanari'
  },
  {
    firstName: 'Alejandra',
    lastName: 'Barbosaa'
  },
  {
    firstName: 'Ramiro',
    lastName: 'Barbosaa'
  },
  {
    firstName: 'Martin',
    lastName: 'Regali'
  },
  {
    firstName: 'Thiago',
    lastName: 'Barbosaa'
  }]));
  
  