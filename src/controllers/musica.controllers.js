const musica = require('../models/musica.models');

//Obtener musica
const obtenerMusicasCtrl = async (_req, res) => {
    try {
        const obtenerMusicas = await musica.findAll();

        return res.json(obtenerMusicas);
    } catch (error) {
        console.log('Error al obtener las musicas', error);
        return res.status(500).json({
            message: 'Error al obtener las musicas'
        })
    }
}

// Obtener una musica
const obtenerUnaMusicaCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const obtenerUnaMusica = await musica.findOne({
            where: {
                estado: true,
                id
            }
        });
        return res.json((obtenerUnaMusica));
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener una musica'
        })
    }
}

// Crear musica
const crearMusicaCtrl = async (req, res) => {
    const {  playlist_id, nombre_musica, artista } = req.body;
    try {
        const nuevaMusica = await musica.create({
            playlist_id,
            nombre_musica,
            artista
        })
        await nuevaMusica.save();
        return res.json(nuevaMusica);
    } catch (error) {
        console.log('Error al crear la musica', error);
        return res.status(500).json({
            message: 'Error interno al crear la musica'
        })
    }
}

// Actualizar playlist
const actualizarMusicaCtrl = async (req, res) => {
    const { nombre_musica, artista } = req.body;
    try {
        const actualizarMusica = await musica.update({
            nombre_musica,
            artista
        }, {
            where: {
                id: req.params.id,
            }
        });
        if (!actualizarMusica) {
            throw ({
                status: 400,
                message: 'No fue posible actualizar la musica'
            })
        }
        return res.json({
            message: 'Musica actualizada correctamente'
        })
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor')
    }
}

// Eliminar musica
const eliminarMusicaCtrl= async (req, res) => {
    try {
        const { id } = req.params;
        if(!id){
            throw({
                status: 400,
                message: 'No se ha enviado el id de la musica'
            })
        }
        const eliminarMusica = musica.destroy({
            where: {
                id: id
            },
            });
        if(!eliminarMusica) {
            trow ({
                status: 400,
                message: 'La musica no ha sido eliminada'
            })
        }
        return res.json({message: 'La musica se eliminó correctamente' });

    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

module.exports = {
obtenerMusicasCtrl,
obtenerUnaMusicaCtrl,
crearMusicaCtrl,
actualizarMusicaCtrl,
eliminarMusicaCtrl}