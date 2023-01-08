'use strict';

const mongoose = require('mongoose');

//definir un anuncio
const anuncioSchema = mongoose.Schema({
    name: { type: String, unique: true},
    vender:{type:Boolean},
    precio:{type:Number},
    foto:{type:String},
    tag:{type:Array}
    
});

anuncioSchema.statics.lista = function (filtro,skip,limit){
  const consultaBD = Anuncio.find(filtro)
  consultaBD.skip(skip);
  consultaBD.limit(limit);
  return consultaBD.exec()
}


// crear el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

// exportar el modelo
module.exports = Anuncio;