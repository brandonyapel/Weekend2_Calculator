var express = require('express');
var router = express.Router();

//require in multiply function from module
var multiply = require('../modules/multiply.js');


router.get('/',function(req,res){
    console.log('multiply:',multiply(10,5));
    res.send('multiply')
});

module.exports = router;
