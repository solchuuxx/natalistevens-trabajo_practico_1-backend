import { usuario } from '../models/usuario.models'

export const crearUsuarioCtrl = async (req, res) => {
    try {
        const nuevoUsuario = await usuario.create(req.body);
        res.status(201).json(nuevoUsuario)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}