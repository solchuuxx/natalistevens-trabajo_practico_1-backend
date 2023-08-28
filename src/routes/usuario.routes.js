const { Router } = require('express');
const router = Router();

const {
    crearUsuarioCtrl, 
    actualizarUsuarioCtrl,
    eliminarUsuarioCtrl,
    obtenerUnUsuarioCtrl,
    obtenerUsuariosCtrl
} = require('../controllers/usuario.controllers.js');

// ==========================================
//         Rutas para CRUD de usuarios
// ==========================================

// Obtener todos los usuarios
router.get('/api/usuario',obtenerUsuariosCtrl);

// Obtener un usuario
router.get('/api/usuario/:id', obtenerUnUsuarioCtrl);

// Crear un usuario
router.post('/api/usuario', crearUsuarioCtrl);

// Actualizar un usuario
router.put('/api/usuario/:id', actualizarUsuarioCtrl);

// Eliminar un usuario por id
router.delete('/api/usuario/:id', eliminarUsuarioCtrl);


module.exports = router;