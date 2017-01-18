var http = require('http');
var randomNumber = require('./Module1');
var toUSD= require('./Module2');
var mod3 = require('./Module3');


http.createServer(function (req, res){
res.writeHead(200);


res.write(mod3.Module3());
res.write(mod3.balance());
res.write('hello');
res.end();//okay to send response
}).listen(3000);
