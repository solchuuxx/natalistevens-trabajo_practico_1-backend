const { sequelize, DataTypes } = require('../../database.js')

const musica = sequelize.define('musica', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    playlist_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    nombre_musica: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    artista: {
        type: DataTypes.STRING(30),
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
},
{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'musica'
});

try {
    musica.sync({ force: false }).then(() => {
        console.log('Se creó la tabla de musica.');
    });
} catch (error) {
    console.log('Ha ocurrido un error al crear la tabla de musica.', error)
}

module.exports = musica;