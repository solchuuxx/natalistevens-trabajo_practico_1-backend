const { Router } = require('express');
const router = Router();

const {
    crearPlaylistCtrl, 
    actualizarPlaylistCtrl,
    eliminarPlaylistCtrl,
    obtenerPlaylistsCtrl,
    obtenerUnaPlaylistCtrl
} = require('../controllers/playlist.controllers.js');

// ==========================================
//         Rutas para CRUD de playlists
// ==========================================

// Obtener todas las playlists
router.get('/api',obtenerPlaylistsCtrl);

// Obtener una playlist
router.get('/api/:id', obtenerUnaPlaylistCtrl);

// Crear una playlist
router.post('/api', crearPlaylistCtrl);


// Actualizar una playlist
router.put('/api/:id', actualizarPlaylistCtrl);

// Eliminar una playlist por id
router.delete('/api/:id', eliminarPlaylistCtrl);


module.exports = router;