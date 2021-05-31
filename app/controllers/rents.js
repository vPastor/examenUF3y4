var mongoose = require("mongoose"),
  Model = require("../models/rent"),
  carModel = require("../models/car"),
  ctrlDir = "/app/app/controllers",
  carsCtrl = require(path.join(ctrlDir, "cars"));

exports.getAll = async (req, res, next) => {

};

exports.find = async (req, res, next) => {

};

exports.delete = async (req, res, next) => {

};

exports.add = async (req, res, next) => {

  var car = carModel.findOne({ id: req.params.car });
  var precio = Number(car.price) * Number(req.params.dias);
  //price: Precio del coche x el numero de dias. PAra saber el precio del coche debes obtener ANTES la info del coche seleccionado
  var el = {
    car: req.params.car,
    client: req.params.client,
    days: req.params.dias,
    price: precio
  };
  var resp = Model.save(el);
  next();


};