'use strict'
const express = require('express')

const { query } = require('express')
const Followers = require('../models/Followers')
const Publicaciones = require('../models/Publicaciones')
const router = express.Router()
//manejo los metodos CRUD



router.post('/', async (req, res, next) => {
    try {
        //precojo los datos de query
        const new_post = {};
        new_post.fecha = req.query.fecha;
        new_post.usuario = req.query.usuario;
        new_post.texto = req.query.texto;
        new_post.imagen = req.query.imagen;
      

        
    
        // instanciar un nueva publicacion en memoria
        const Pub = new Publicaciones(new_post);
        //guardar publicacion en BD
        const save_post = Pub.save();
    
        res.json({ result:new_post});
    
    } catch (err) {
        next(err);
    }
    });





module.exports = router;

