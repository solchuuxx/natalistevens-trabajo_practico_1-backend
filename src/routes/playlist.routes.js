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
router.get('/api/playlist',obtenerPlaylistsCtrl);

// Obtener una playlist
router.get('/api/playlist/:id', obtenerUnaPlaylistCtrl);

// Crear una playlist
router.post('/api/playlist/:id', crearPlaylistCtrl);


// Actualizar una playlist por id
router.put('/api/playlist/:id', actualizarPlaylistCtrl);

// Eliminar una playlist por id
router.delete('/api/playlist/:id', eliminarPlaylistCtrl);


module.exports = router;