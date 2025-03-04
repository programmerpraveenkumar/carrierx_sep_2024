var http = require("http");//import the http package

//create server from http package with port no
http.createServer((req,res)=>{
    console.log(req.url);
    
    // console.log("server is created");
    res.write("sample response..")
    res.end();
}).listen(8080)