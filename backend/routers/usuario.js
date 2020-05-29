var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var Usuario = require('../models/usuario');
var Categorias = require('../models/categorias');


// ==========================================
// Obtener todos los Usuarios
// ==========================================
router.get('/', (req, res) => {

    Usuario.find({},{ _id:true ,nombre:true, apellido:true})
    .then(usuarios => {
        res.send(usuarios);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    });
  
});

// ==========================================
// Obtener un Usuario
// ==========================================
router.get('/:idUsuario', (req, res) => {

    Usuario.find({_id: req.params.idUsuario},{nombre:true, apellido:true})
    .then(usuario => {
        res.send(usuario[0]);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    });
  
});

// ==========================================
// Obtener las ordenes de un usuario
// ==========================================
router.get('/ordenes/:idUsuario', (req, res) => {

    Usuario.find({_id: req.params.idUsuario},{ ordenes:true})
    .then(ordenes => {
        res.send(ordenes[0]);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end();
    });
  
});

// ===============================================
// Agregar un producto a una orden de un usuario
// ===============================================
router.put('/:idUsuario', (req, res) => {

    console.log(req.body.nombreProducto);
    

    Usuario.updateOne( {
        _id: mongoose.Types.ObjectId(req.params.idUsuario) 
    },
     { 
        $push:{
            ordenes:{
                nombreProducto: req.body.nombreProducto,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                cantidad: req.body.cantidad
            }
        }
     })
    .then(result => {
        res.send(result);
        res.end();
    })
    .catch(error => {
        res.send(error);
        res.end(error);
    });
 
  
});
module.exports = router;