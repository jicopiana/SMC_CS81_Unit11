/*
Student: Jofhel Opiana (ID: 1220912)
Spring 2018 – CS81 (1729)
Date: 05/24/18
Unit 11 Assignment 

Problem #3: Submit file websvr.js
Using Node.js http module, write a Node.js script that starts a simple HTTP Server.
The HTTP server should run on port 8001, and writes back to client:
1. response.writeHead(200, {'Content-Type': 'text/html'});
2. response.write('Hello World, my name is John Smith'); //Fill in your name
*/

var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('Hello World, my name is Jofhel Opiana!');
  response.end();
}).listen(8001);

console.log("Server is listening to http://localhost:8001/");
