var express = require('express');
var router = express.Router();

/* GET articles listing. */
router.get('/articles', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
