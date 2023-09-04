//1) Creación de Tabla / Inserción de un registro
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


//crea la tabla users
class User extends Sequelize.Model {}
User.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


//inserta un registro
sequelize.sync()
  .then(() => User.create({
    firstName: 'Belen',
    lastName: 'Perez'
  }))
  .then(Belen => {
    console.log(Belen.toJSON());
    //modifica el registro insertado
    return User.update({ firstName: "Noelia"}, {
      where: {
       id: 1
      }
    })
  }
  ).then(() => {
    console.log("Done");
  });

