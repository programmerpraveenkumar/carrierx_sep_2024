//import express into this file.
const express = require('express');

const app = express();//create the object;

app.get("/myname",(req,res)=>{
    let email =  req.query['email'];
    res.write("recvd value is "+email);
    res.end();//ending the response.
})

app.post("/myname",(req,res)=>{
    res.write("my name post is asdfsdfsd");
    res.end();//ending the response.
})

app.post("/login",(req,res)=>{
    //getting the params from the request
    let email =  req.query['email'];
    let password =  req.query['password'];
    //validate the email,password with our data
    if(email == 'admin@gmail.com' && password == 'admin'){
        let msg = {"msg":"your details are correct"};
        res.status(200).json(msg)
    }else{
        let msg = {"msg":"your details are wrong"};
        res.status(400).json(msg)
    }
    //ending the response
    res.end();//ending the response.
})
app.post("/register",(req,res)=>{
    //getting the params from the request
    let email =  req.query['email'];
    let name =  req.query['name'];
    let password =  req.query['password'];
    let mobile =  req.query['mobile'];

    if(name.length <6 || name.length>15){
        res.status(400).json({"msg":"name should be between 6 to 15 characters"})
    }else if(password.length <6 || password.length>12){
        res.status(400).json({"msg":"password should be 6 to 12 chracters"})
    }else if(mobile.length !=10 ){
        res.status(400).json({"msg":"mobile should be 10 chracters"})
    }else if( !(/(.+)@(.+){2,}\.(.+){2,}/.test(email))){
        res.status(400).json({"msg":"email is not in valid format!!!"})
    }else {
        //db operation has to be implemented
        res.status(400).json({"msg":"you re correct!"})
    }
    //ending the response
    res.end();//ending the response.
})

//in postman select put method and enter the url
app.put("/myname",(req,res)=>{
    res.write("this is for put method");
    res.end();//ending the response.
})
//in postman select delete method and enter the url
app.delete("/myname",(req,res)=>{
    res.write("this is for delete method");
    res.end();//ending the response.
})

app.listen(8080,()=>console.log("server is started.!!!"));