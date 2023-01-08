'use strict'
const express = require('express')
const Anuncio = require('../models/Anuncio');
const router = express.Router();

//manejo los metodos CRUD
//LISTA de ANUNCIOS



//Filtrar anuncio por tipo venta o busqueda para que sea de venta el campo venta tiene que estar a True
router.get('/',async (req,res,next)=>{
    try{
        const venta = req.query.venta //(?venta=true) para obtener los que se venden y (?venta = false) para los que son de busqueda
        const name = req.query.name; 
        const min = req.query.min;
        const max = req.query.max;
        const tag = req.query.tag;



        //parametros de paginacion

        const skip = req.query.skip
        const limit = req.query.limit

        let  filtro = {};
        //para buscar que el nombre empiece por 
        if (name){
            filtro.name = RegExp("^"+name);}
    
        if (venta){//obtener si es venta o busqueda
            if (venta==="true"){
                filtro.vender = true;
            }else if (venta==="false"){
                filtro.vender = false;
            }

        }
        if (min && max){
            filtro.precio = { '$gte': min, '$lte': max }
            console.log(filtro)
        }
        if (min || max){//obtener rango de precios
            if(min){
                filtro.precio = { $gt: min}}
                else{filtro.precio = { $lt: max}}
        }
        if(tag){
            filtro.tag = tag

        }
       
        
        //Si en este caso voy a filtrar por nombre del articulo que empiece por lo que se introduce
        
        const listado = await (Anuncio.lista(filtro,skip,limit))
        res.json({listado})


    }catch(error){
        next(error)
    }
    

})
router.get('/listadotags',async (req,res,next)=>{
        try{
                //lista de tag existente
        //obtener listado de tags
        const listado = await (Anuncio.lista())
        const l_tag = []
        for (let i = 0; i < listado.length; i++) {
            for (let j = 0; j < (listado[i].tag).length; j++){
                if (!(l_tag.includes(listado[i].tag[j]))){
                    l_tag.push(listado[i].tag[j])
                }
            }
        }
        res.json({l_tag});
        }catch(error){
            next(error)
        }})








module.exports = router;

