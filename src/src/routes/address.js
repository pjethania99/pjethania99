var express = require('express');
var router = express.Router();

/* GET address listing. */
router.get('/address', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
