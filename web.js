var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World2!');
var fs=require('fs');
var buf = new Buffer(fs.readFileSync('index.html'), 'utf-8');
response.send(buf.toString());

});

//var fs=require('fs');

//fs.readFile('index.html', function(err, data){
 // if (err) throw err;
  //console.log(data);
//});

//fs.toString();

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
