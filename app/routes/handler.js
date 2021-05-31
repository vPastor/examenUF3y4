var createError = require("http-errors");
var express = require('express');
var router = express.Router();

// catch 404 and forward to error handler
router.use(function (req, res, next) {
  res.locals.message = "Pagina no encontradass";
  res.locals.error = res;
  next(createError(404));
});

module.exports = router;
