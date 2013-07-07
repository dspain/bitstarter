var express = require('express');

var app = express.createServer(express.logger());

fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = new Buffer (fs.readFileSync('index.html'), 'utf-8');
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
