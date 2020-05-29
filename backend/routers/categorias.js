var express = require('express');
var router = express.Router();

var Categoria = require('../models/categorias');

// ==========================================
// Obtener categorias
// ==========================================
router.get('/', (req, res) => {

    Categoria.find({}, { _id: true, nombreCategoria: true, color: true, icono: true, empresas:true })
        .then(categorias => {
            res.send(categorias);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// ==========================================
// Obtener categoria
// ==========================================

router.get('/:idCategoria', (req, res) => {

    Categoria.find({ _id: req.params.idCategoria }, { nombreCategoria: true, empresas: true })
        .then(categorias => {
            res.send(categorias[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

// ==========================================
// Guardar categoria
// ==========================================

router.post('/', (req, res) => {

    let categoria = new Categoria({
        nombreCategoria: req.body.nombreCategoria,
        descripcion: req.body.descripcion,
        color: req.body.color,
        icono: req.body.icono,
        empresas: []
    });

    categoria.save()
        .then(result => {

            if (result) {
                res.send({ok : true, mensaje:'Categoria agregada con exito'});
                res.end();
            }
            
        })
        .catch(error => {
            res.send(error);
            res.end();
        });

});

module.exports = router;