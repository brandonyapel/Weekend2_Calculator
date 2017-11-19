var express = require('express');
var router = express.Router();

//require in subtract function from module
var subtract = require('../modules/subtract.js');


router.get('/',function(req,res){
    console.log('subtract:',subtract(10,5));
    res.send('subtract')
});

module.exports = router;
