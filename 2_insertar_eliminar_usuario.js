//2) inserción, modificación y eliminación de un registro. 

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


//inserta 1 registro
sequelize.sync()
  .then(() => User.create({
    firstName: 'Lucas',
    lastName: 'Gaitan'
  }))
  .then(Lucas => {
    console.log(Lucas.toJSON());
    //elimina el registros recién insertado
    return User.destroy({
      where: {
        id: 2
      }
    })
  }).then(() => {
  console.log("Elimine Registro con ID 2");
});