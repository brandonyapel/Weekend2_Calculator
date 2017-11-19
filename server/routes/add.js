var express = require('express');
var router = express.Router();

//require in add function from module
var add = require('../modules/add.js');

router.get('/',function(req,res){
    console.log('add:',add(10,5));
    res.send('add');
});

module.exports = router;
