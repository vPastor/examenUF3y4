var express = require("express"),
  path = require("path"),
  router = express.Router(),
  ctrlDir = "/app/app/controllers",
  carsCtrl = require(path.join(ctrlDir, "cars")),
  rentsCtrl = require(path.join(ctrlDir, "rents")),
  clientsCtrl = require(path.join(ctrlDir, "clients"));


//router.route("/chat/:id");
//router.route("/rent/new");
//router.route("/rent/list");
router.Get('/Rent/New', ClienteCtrl.Getall);
router.Get('/Rent/New', CocheCtrl.Getall);
router.Get('/Rent/New', function (Req, Res, Next) {
    res.Render('Form', { Coches: Req.Coches, Clientes: Req.Clientes });
  });
  router.post('/rent/new', rentsCtrl.add);
  router.post('/rent/new', rentsCtrl.Getall);
  router.post('/rent/new', function (Req, Res, Next) {
    res.render('List', { Rents: Req.Rents});
  });

module.exports = router;
