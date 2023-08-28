const Usuario = require('../models/usuario.models.js');

//Obtener usuarios
const obtenerUsuariosCtrl = async (_req, res) => {
    try {
        const obtenerUsuarios = await Usuario.findAll();

        return res.json(obtenerUsuarios);
    } catch (error) {
        console.log('Error al obtener los usuarios', error);
        return res.status(500).json({
            message: 'Error al obtener los usuarios'
        })
    }
}

// Obtener un usuario
const obtenerUnUsuarioCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const obtenerUnUsuario = await Usuario.findOne({
            where: {
                estado: true,
                id
            }
        });
        return res.json((obtenerUnUsuario));
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener un Usuario'
        })
    }
}

// Crear usuario
const crearUsuarioCtrl = async (req, res) => {
    const { user, contraseña, correo } = req.body;
    try {
        const nuevoUsuario = await Usuario.create({
            user,
            contraseña,
            correo
        })

        await nuevoUsuario.save();
        return res.json(nuevoUsuario);
    } catch (error) {
        console.log('Error al crear el usuario', error);
        return res.status(error.status || 500).json({ message: error.message || "Error del servidor al crear el usuario"})
        }
    }


// Actualizar Usuario
const actualizarUsuarioCtrl = async (req, res) => {
    const { user, contraseña, correo } = req.body;
    try {
        const actualizarUsuario = await Usuario.update({
            user,
            contraseña,
            correo
        }, {
            where: {
                id: req.params.id,
            }
        });
        if (!actualizarUsuario) {
            throw ({
                status: 400,
                message: 'No fue posible actualizar el usuario'
            })
        }
        return res.json({
            message: 'Usuario actualizado correctamente'
        })
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor')
    }
}

// Eliminar usuario
const eliminarUsuarioCtrl= async (req, res) => {
    try {
        const { id } = req.params;
        if(!id){
            throw({
                status: 400,
                message: 'No se ha enviado el id del usuario'
            })
        }
        const eliminarUsuario = Usuario.destroy({
            where: {
                id: id
            },
            });
        if(!eliminarUsuario) {
            trow ({
                status: 400,
                message: 'El usuario no ha sido eliminado'
            })
        }
        return res.json({eliminarUsuario, message: 'El usuario se eliminó correctamente' })

    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

module.exports = {
obtenerUsuariosCtrl,
obtenerUnUsuarioCtrl,
crearUsuarioCtrl,
actualizarUsuarioCtrl,
eliminarUsuarioCtrl}