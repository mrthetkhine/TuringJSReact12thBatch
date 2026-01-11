var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({
        message: 'Welcome to the Admin Page!'
    })
})
router.get('/hello', function(req, res) {
    res.json({
        message: 'Hell from the Admin Page'
    })
})
module.exports = router;