var express = require('express');
var app = express();
const ejs = require('ejs');
const path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public'))
app.use('/', express.static('public'))

app.get('/',function(req,res){
  res.render('index');
});

app.get('/adha',function(req,res){
  res.render('adha');
});

app.get('/purnima',function(req,res){
  res.render('purnima');
});

//port for heroku
let port = 3002;

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
