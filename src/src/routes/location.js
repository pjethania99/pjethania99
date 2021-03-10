var express = require('express');
var router = express.Router();

/* GET location listing. */
router.get('/location', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
