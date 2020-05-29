var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var medicoSchema = new Schema({
    nombre: String,
    apellido : String,
    ordenes: Array
});


module.exports = mongoose.model('Usuarios', medicoSchema);