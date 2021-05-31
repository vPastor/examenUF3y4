var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var carSchema = new Schema({
    id:{ type: String},
    brand: { type: String},
    model: { type: String},
    price: { type: Number}
 });
 module.exports = mongoose.model("Car", carSchema);