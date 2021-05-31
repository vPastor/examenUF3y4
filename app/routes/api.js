var path = require("path"),
  express = require("express"),
  router = express.Router(),
  ctrlDir = "/app/app/controllers",
  carsCtrl = require(path.join(ctrlDir, "cars")),
  rentsCtrl = require(path.join(ctrlDir, "rents")),
  clientsCtrl = require(path.join(ctrlDir, "clients"));

/* CARS API */

/* CLIENTS API */

/* RENTS API */

module.exports = router;
