var express = require('express');
var process = require('../public/api/Process');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('view/index',{ title: 'Express' });
});

router.post('/process', process.entrance);

module.exports = router;
