import  { validation } from 'express-validator';

export const validate = (req, res, next) => {
    const error = validation(req);

    if (!error.isEmpty()) {
        return res.status(400).json({error: error.array()})
    }

    next()
}