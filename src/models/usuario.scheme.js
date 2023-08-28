import { checkSchema } from 'express-validator'

export const crearUsuarioScheme = checkSchema({
    user: {
        isLength: {
            //la propiedad usuario debe tener mas de 5 caracteres
            options: [{ min: 5 }, { max: 15 }],
            errorMessage: "El usuario debe contener mas de 5 caracteres"
        }
    },
    contraseña: {
        isLength: {
            //la contraseña debe tener mas de 5 caracteres
            options: [{ min: 10}],
            errorMessage: "La contraseña debe contener mas de 10 caracteres"
        }
    }

})