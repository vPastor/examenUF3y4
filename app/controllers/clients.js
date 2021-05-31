var mongoose = require("mongoose"),
  Model = require("../models/client");

exports.getAll = async (req, res, next) => {
  var clientes = await Model.find({});
  if(!clientes)
  {
    res.render('error', {message:"No se ha encontrado clientes"})
  }
  else{
    req.clientes = clientes;
    next();
  }
  


};

exports.find = async (req, res, next) => {

};

exports.delete = async (req, res, next) => {
  var proyecto = await Oferta.findOne({ proyecto_id: proyectoid, nombre_oferta: nombre_ofertas });
  if (!proyecto) {
      res.render('gestionarofertas', { layout: 'layout', template: 'home-template', error: "No se ha podido aplicar a la oferta" });
  }
};
