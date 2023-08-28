const { sequelize, DataTypes } = require('../../database.js')
const { Usuario } = require('./usuario.models.js')
const { musica } = require('./musica.models.js')

const playlist = sequelize.define('playlist', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true
    },
    usuario_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
    tableName: 'playlist'
});

try {
    playlist.sync({ force: false }).then(() => {
        console.log('Se creó la tabla de playlist');
    });
} catch (error) {
    console.log('Ha ocurrido un error al crear la tabla de playlist', error)
}

module.exports = playlist;