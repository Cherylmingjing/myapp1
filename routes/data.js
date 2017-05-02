var express = require('express');
var router = express.Router();

/* GET home page. */
console.log('-------------');
router.get('/sdd', function(req, res, next) {
	console.log('-------------');
  	res.render('index', { title: 'phy' });
});

module.exports = router;
