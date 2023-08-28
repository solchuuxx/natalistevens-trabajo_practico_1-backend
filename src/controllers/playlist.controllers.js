const playlist = require('../models/playlist.models.js');

//Obtener las playlists
const obtenerPlaylistsCtrl = async (_req, res) => {
    try {
        const obtenerPlaylists = await playlist.findAll();

        return res.json(obtenerPlaylists);
    } catch (error) {
        console.log('Error al obtener las playlists', error);
        return res.status(500).json({
            message: 'Error al obtener las playlists'
        })
    }
}

// Obtener una playlist
const obtenerUnaPlaylistCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const obtenerUnaPlaylist = await playlist.findOne({
            where: {
                estado: true,
                id
            }
        });
        return res.json((obtenerUnaPlaylist));
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener una playlist'
        })
    }
}

// Crear playlist
const crearPlaylistCtrl = async (req, res) => {
    const { titulo } = req.body;
    try {
        const nuevaPlaylist = await playlist.create({
            usuario_id: req.params.id,
            titulo : titulo
        })
        await nuevaPlaylist.save();
        return res.json(nuevaPlaylist);
    } catch (error) {
        console.log('Error al crear la playlist', error);
        return res.status(error.status || 500).json({ message: error.message || "Error del servidor al crear el usuario"})
    }
}

// Actualizar playlist
const actualizarPlaylistCtrl = async (req, res) => {
    try {
        const { titulo, usuario_id } = req.body;
        const actualizarPlaylist = await playlist.update({titulo, usuario_id},{
            where: {
                id: req.params.id,

            }
        });

        if (!actualizarPlaylist) {
            throw ({
                status: 400,
                message: 'No fue posible actualizar la playlist'
            })
        }
        return res.json({
            message: 'Playlist actualizada correctamente'
        })
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor')
    }
}

// Eliminar playlist
const eliminarPlaylistCtrl= async (req, res) => {
    try {
        const { id } = req.params;
        if(!id){
            throw({
                status: 400,
                message: 'No se ha enviado el id de la reserva'
            })
        }
        const eliminarPlaylist = playlist.destroy({
            where: {
                id: id
            },
            });
        if(!eliminarPlaylist) {
            trow ({
                status: 400,
                message: 'La playlist no ha sido eliminada'
            })
        }
        return res.json({eliminarPlaylist, message: 'La playlist se eliminó correctamente' });

    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

module.exports = {
obtenerPlaylistsCtrl,
obtenerUnaPlaylistCtrl, 
crearPlaylistCtrl,
actualizarPlaylistCtrl, 
eliminarPlaylistCtrl}