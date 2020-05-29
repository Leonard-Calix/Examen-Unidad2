var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importar rutas
var usuarioRoute = require('./routers/usuario');
var categoriasRoute = require('./routers/categorias');


// Rutas
app.use('/usuarios', usuarioRoute  );
app.use('/categorias', categoriasRoute  );



app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});