var express = require('express');

var app = express.createServer(express.logger());

fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

app.get('/', function(request, response) {
  var fs = require('fs');
  var buffer = new buffer ();
  response.send(buffer.toString('utc 8', fs.readFileSync('index.html')))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
