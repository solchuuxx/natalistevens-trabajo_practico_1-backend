import { sequelize, DataTypes } from "../../../../database.js";

const usuario = sequelize.define( 'usuario', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario:{
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    contraseña:{
        type: DataTypes.STRING(80),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'usuario'
});

try {
    usuario.sync({ force: false }).then(() => {
        console.log('Se creó la tabla de usuarios');
    });
} catch (error) {
    console.log('Ocurrió un error al crear la tabla de usuarios', error)
}

module.exports = usuario;