var mongoose = require("mongoose"),
  Model = require("../models/car");

exports.getAll = async (req, res, next) => {
  var coches = await Model.find({});
  if(!coches)
  {
    res.render('error', {message:"No se ha encontrado coches"})
  }
  else{
    req.coches = coches;
    next();
  }
};

exports.find = async (req, res, next) => {

};
exports.create = async (req, res, next) => {
 
};
exports.delete = async (req, res, next) => {
 
};
