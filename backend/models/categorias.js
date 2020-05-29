var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var medicoSchema = new Schema({
    nombreCategoria: String,
    descripcion : String,
    color: String,
    icono: String,
    empresas: Array

});


module.exports = mongoose.model('Categorias', medicoSchema);