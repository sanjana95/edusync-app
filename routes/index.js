var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Yash Pandey', rollnumber: 'Test' });
});

module.exports = router;
