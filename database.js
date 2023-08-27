const { Sequelize, DataTypes } = require('sequelize');

// Conexion BD
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    });


const conexion = async () => {

    try {
        await sequelize.authenticate()
        console.log('Se conectó la base de datos');
    } catch (error) {
        console.log('ERROR AL CONECTAR DB: ', error);
    }

};

module.exports = {
    sequelize,
    DataTypes,
    conexion
}