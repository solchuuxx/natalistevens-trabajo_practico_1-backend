import { checkSchema } from 'express-validator'

export const crearPlaylistScheme = checkSchema({
    titulo: {
        isLength: {
            //la propiedad titulo debe tener mas de 5 caracteres
            options: [{ min: 5 }, { max: 25 }],
            errorMessage: "El titulo debe contener mas de 5 caracteres"
        }
    }
})