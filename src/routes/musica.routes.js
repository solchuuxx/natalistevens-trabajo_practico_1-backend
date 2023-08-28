const { Router } = require('express');
const router = Router();

const {
    crearMusicaCtrl, 
    actualizarMusicaCtrl,
    eliminarMusicaCtrl,
    obtenerUnaMusicaCtrl,
    obtenerMusicasCtrl
} = require('../controllers/musica.controllers.js');

// ==========================================
//         Rutas para CRUD de musicas
// ==========================================

// Obtener todas las musicas
router.get('/api/musica',obtenerMusicasCtrl);

// Obtener una musica
router.get('/api/musica/:id', obtenerUnaMusicaCtrl);

// Crear una musica
router.post('/api/musica', crearMusicaCtrl);

// Actualizar una musica
router.put('/api/musica/:id', actualizarMusicaCtrl);

// Eliminar una musica por id
router.delete('/api/musica/:id', eliminarMusicaCtrl);


module.exports = router;