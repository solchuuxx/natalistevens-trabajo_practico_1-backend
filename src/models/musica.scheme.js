import { checkSchema } from 'express-validator'

export const crearMusicaScheme = checkSchema({
    nombre_musica: {
        isLength: {
            //la propiedad musica debe tener mas de 6 caracteres
            options: [{ min: 6 }, { max: 20 }],
            errorMessage: "La musica debe contener entre 6 y 20 caracteres"
        }
    },
    artista: {
        isLength: {
            //la propiedad artista debe tener mas de 3 caracteres
            options: [{ min: 3}],
            errorMessage: "Debe contener más de 3 caracteres."
        }
    }

})