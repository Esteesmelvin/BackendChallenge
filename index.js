const express = require('express');
require('dotenv').config();
const {dbConnection} = require('./database/config')
const cors = require('cors')
const TaskScheme = require('./models/TaskScheme');
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('./models/TaskScheme');
const Server = require('./Server/server');

const myServer = new Server();
myServer.listen();

//CREAR EXPRESS APP
const app = express();

//BASE DE DATOS
dbConnection();

//CORS
app.use( cors() )

app.use(express.static('public'));

//LECTURA Y PARSEO DEL BODY
app.use(express.json());

//RUTAS
app.use('/api/auth', require ('./routes/auth'))
app.use('/api/task', require('./routes/task'))

//ESCUCHAR EN PUERTO 4000
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT);
});
