var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

//App Setup
var app = express();

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.listen(3000, function(){
  console.log('listening on *:3000');
});
