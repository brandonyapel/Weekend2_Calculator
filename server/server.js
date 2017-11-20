var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;

console.log('starting up server')

//require in routes
var calculator = require('./routes/calculator');



//link public folder to localhost:5000 url
app.use(express.static('server/public'));

//allows body-parser to work
app.use(bodyParser.urlencoded({extended: true}));


//links url localhost:5000/calcualtor
app.use('/calculator', calculator);



app.listen(port,function(){console.log('listening on port',port)});



