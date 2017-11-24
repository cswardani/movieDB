var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var m = require('./api/anjis.js');

app.get('/', function (req, res){
    
});

var server = app.listen(3456, "127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port);
    console.log(m)
});