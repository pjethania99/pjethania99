var express = require('express');
var router = express.Router();

/* GET challans listing. */
router.get('/challans', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
