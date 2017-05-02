var express = require('express');
var router = express.Router();

/* GET home page. */
console.log(999);
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'phy' });
});
module.exports = router;
