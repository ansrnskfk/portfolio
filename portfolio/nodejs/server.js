var template = require('../template/templatemodule.js');
var memo = require('../DB/memo.js');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('../public'));

app.get('/', function(request, response){
  var title = ''
  var mainhtml = template.mainhtml(title)
  response.send(mainhtml);
});

app.get('/memo', function(request, response){
  memo.home(request, response);
});

app.get('/memo/view', function(request, response){
  memo.view(request, response);
});

app.get('/memo/create', function(request, response){
  memo.create(response);
});

app.post('/memo/create_process', function(request, response){
  memo.create_process(request, response);
});

app.get('/memo/update', function(request, response){
  memo.update(request, response);
});

app.post('/memo/update_process', function(request, response){
  memo.update_process(request, response);
});

app.post('/memo/delete_process', function(request, response){
  memo.delete_process(request, response);
});

app.listen(3000, () => console.log('success'));