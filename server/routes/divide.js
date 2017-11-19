var express = require('express');
var router = express.Router();

//require in divide function from module
var divide = require('../modules/divide.js');


router.get('/',function(req,res){
    console.log('divide:',divide(10,5));
    res.send('divide')
});

module.exports = router;
