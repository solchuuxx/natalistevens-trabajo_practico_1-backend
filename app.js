// Importaciones
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

//Base de datos
const { conexion } = require('./database.js');

conexion()

const app = express()
const port = process.env.PORT || 5000

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use(require('./src/routes/playlist.routes.js'));

//Para correr el servidor 
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor listo en http://localhost:${process.env.PORT}`)
})