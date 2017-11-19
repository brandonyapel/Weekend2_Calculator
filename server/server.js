var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;

//require in routes
var add = require('./routes/add.js');
var divide = require('./routes/divide.js');
var multiply = require('./routes/multiply.js');
var subtract = require('./routes/subtract.js');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/add', add);
app.use('/subtract', subtract);
app.use('/divide', divide);
app.use('/multiply', multiply);


app.listen(port,function(){console.log('listening on port',port)});



