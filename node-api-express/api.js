//import th user service
const UserService = require('./service/UserService');

//import the expressjs
const express = require('express');//

const app = express();//creating the object.

//get post put patch delete
app.get("/myname",(req,res)=>{
    res.write("this is from expressj");
    res.end();
})
 
app.post("/login",(req,res)=>{
    //destructuring
    let {email,password} = req.query;
    
    let msg = userServiceObj.login(email,password);

    res.write(msg);
    res.end();
})

app.put("/myemail",(req,res)=>{
    res.write("put email is test@gmai.com");
    res.end();
})

app.delete("/myemail",(req,res)=>{
    res.write("delete email is test@gmai.com");
    res.end();
})

const userServiceObj = new UserService();//creating the object

//return the list of user
app.get("/getUser",(req,res)=>{
    let {id} = req.query;
    let user = "";
    if(id != undefined){//it s not empty
         user = userServiceObj.getUserWithFilter(id);
    }else{
        user = userServiceObj.getAllUser();
    }
    res.json(user);
    res.end();
})




app.listen(8080,()=>{
    console.log("server is created..");
})