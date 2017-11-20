var express = require('express');
var router = express.Router();

//require in add function from module
var add = require('../modules/add.js');
var cosine = require('../modules/cos.js')
var divide = require('../modules/divide.js');
var multiply = require('../modules/multiply.js');
var sine = require('../modules/sin.js')
var subtract = require('../modules/subtract.js');
var tangent = require('../modules/tan.js')

//answer object to be sent down to public
var answer = {history: [],answer};


router.post('/add',function(req,res){
    console.log('add: '+req.body.x+' and '+req.body.y+' = '+add(req.body.x,req.body.y));
    answer.answer = add(req.body.x,req.body.y);
    answer.history.push({
        x:req.body.x,
        y:req.body.y,
        operatorSign: '+',
        answer: add(req.body.x,req.body.y)
    });
    res.send(answer);
});//end /add

router.post('/cos',function(req,res){
    console.log('cos('+req.body.y+') = '+cosine(req.body.y));
    answer.answer = cosine(req.body.y);
    answer.history.push({
        x:'',
        y:req.body.y,
        operatorSign: 'cos',
        answer: cosine(req.body.y),
    });
    res.send(answer)
});//end /cos

router.post('/divide',function(req,res){
    console.log('divide:'+req.body.x+' and '+req.body.y+' = '+divide(req.body.x,req.body.y));
    answer.answer = divide(req.body.x,req.body.y);
    answer.history.push({
        x:req.body.x,
        y:req.body.y,
        operatorSign: '/',
        answer: divide(req.body.x,req.body.y)
    });
    res.send(answer)
});//end /divide

router.get('/history',function(req,res){
    res.send(answer.history)
});//end /history

router.post('/multiply',function(req,res){
    console.log('multiply:'+req.body.x+' and '+req.body.y+' = '+multiply(req.body.x,req.body.y));
    answer.answer = multiply(req.body.x,req.body.y);
    answer.history.push({
        x:req.body.x,
        y:req.body.y,
        operatorSign: '*',
        answer: multiply(req.body.x,req.body.y)
    });
    res.send(answer);
});//end /multiply

router.post('/sin',function(req,res){
    console.log('sin('+req.body.y+') = '+sine(req.body.y));
    answer.answer = sine(req.body.y);
    answer.history.push({
        x:'',
        y:req.body.y,
        operatorSign: 'sin',
        answer: sine(req.body.y),
    });
    res.send(answer)
});//end /cos

router.post('/subtract',function(req,res){
    console.log('subtract:'+req.body.x+' and '+req.body.y+' = '+subtract(req.body.x,req.body.y));
    answer.answer = subtract(req.body.x,req.body.y);
    answer.history.push({
        x:req.body.x,
        y:req.body.y,
        operatorSign: '-',
        answer: subtract(req.body.x,req.body.y)
    });
    res.send(answer)
});//end /subtract

router.post('/tan',function(req,res){
    console.log('tan('+req.body.y+') = '+tangent(req.body.y));
    answer.answer = tangent(req.body.y);
    answer.history.push({
        x:'',
        y:req.body.y,
        operatorSign: 'tan',
        answer: tangent(req.body.y),
    });
    res.send(answer)
});//end /tan

module.exports = router;