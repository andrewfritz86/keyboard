var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
  var html = fs.readFileSync("./index.html", "utf8")
  res.send(html);
});


app.use(express.static(__dirname + '/public'));


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});