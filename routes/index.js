var express = require('express');
var processOne = require('../public/Process');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('view/index',{ title: 'Express' });
});

router.post('/processOne', function(req, res, next) {
    processOne.entrance(req.body,res);
});

router.post('/processTwo', function(req, res, next) {
    processTwo.entrance(req.body,res);
});

module.exports = router;
