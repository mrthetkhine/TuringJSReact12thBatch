var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello from users route update');
});
router.get('/hello', function(req, res, next) {
  res.json({
    name : 'Jhon',
    age : 25,
  })
});
router.post('/hello', function(req, res, next) {
  res.json({
    name : 'Jhon called with post',
    age : 25,
  })
});
module.exports = router;
