var http = require('http');//import http server
http.createServer((req,res)=>{
    res.write("hello from nodejs");
    res.end();//end of the response
}).listen(8080,()=>{console.log("server is started..")});
// node filename.js
//open the postman and enter the url as http://localhost:8080