var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var clientSchema = new Schema({
    id:{ type: String},
    name: { type: String},
    surname: { type: String},
 });
 module.exports = mongoose.model("Client", clientSchema);