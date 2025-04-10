//express object
const express = require('express');
var jwt = require('jsonwebtoken');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();
var birds = require("./api-teacher-2")
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    
  }));

app.use(express.json());///configure for request body 

const cors = require("cors");
app.use(cors())

//localhost:8080/birds -> all requests will be navigate to below url
app.use("/birds",birds)
//gateway
// app.use((req,res)=>{
//     console.log(req.originalUrl);
//     if(req.originalUrl.includes("getFile")){
//         req.next();
//     }else{
//         // console.log(req);
        
//         let {authorization} = req.headers;
//         if(authorization == undefined || authorization == ""){
//             res.status(400).json({"message":"Please send the token"});
//             res.end();
//         }else{
//             console.log(authorization);
//             req.next();//will move the request next step
//         }
//     }


// })

///database configuration
const { MongoClient, ObjectId } = require('mongodb');
const { log } = require('console');

// Connection URL
const url = 'mongodb+srv://programmerpraveenkumar:WPKbUiBWhl0lEYvl@cluster0.twdnbua.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'school';


//file upload
app.post("/uploadFile",async(req,res)=>{
    // console.log(req.files);
    req.files.img.mv("tmp/"+req.files.img['name'])
    //me":name,"email":email,"address":address,"password":password,"mobile":mobile});
    res.json({"message":req.files.img['name']});

    res.end();
})
app.get("/getFile",async(req,res)=>{
  
    const {name} = req.query;
    
    res.sendFile(path.join(__dirname)+"/tmp/"+name);
    // res.end();
    
})
//createing the teachers
app.post("/updatePic",async(req,res)=>{
    
    //destructuring
    // let {id} = req.body;//recv the data from the request body
    await client.connect();
    let img = req.files.img.data;
    const db = client.db(dbName);//select the database
    await db.collection("teacher").updateOne({"_id":new ObjectId("67b8980752a788e9b4408951")},{$set:{"img":img}});
    res.json({"message":"teacher pic is created!!"});
    res.end();
})
app.get("/getPic",async(req,res)=>{
    //destructuring
    // let {id} = req.body;//recv the data from the request body
    await client.connect();
    const db = client.db(dbName);//select the database
    let teacher =  await db.collection("teacher").findOne({"_id":new ObjectId("67b8980752a788e9b4408951")});
    const buffer = Buffer.from(teacher.img);       
    res.attachment(`sample.png`).contentType("image/png").send(buffer)
})
//createing the teachers
app.post("/createTeachers",async(req,res)=>{
    
        //destructuring
        let {name,email,address,mobile,password} = req.body;//recv the data from the request body
        await client.connect();

        const db = client.db(dbName);//select the database
        await db.collection("teacher").insertOne({"name":name,"email":email,"address":address,"password":password,"mobile":mobile});
        res.json({"message":"teacher is created!!"});
        res.end();
})

app.get("/token",(req,res)=>{
    
    
    let {name} = req.query;//from the url
    let data = {"name":name};
    let private_key = "secret";
    var token = jwt.sign(data, private_key);
    // console.log(token);
    res.json({"token":token});
    res.end();
})

//localhost:8080/login
//body ->{emai:"","password":""}
app.post("/login",async(req,res)=>{
    
    //destructuring
    let {email,password} = req.body;//recv the data from the request body
    await client.connect();
    const db = client.db(dbName);//select the database
    let teacher =  await db.collection("teacher").find({"email":email,"password":password}).toArray();

    //if records are matching 
    if(teacher.length ==1){
        res.json(teacher);
    }else{
        res.json({"message":"Your details are wrong!!"})
    }
    res.end();
})


app.get("/getTeachers",async(req,res)=>{
    //destructuring
    
    await client.connect();

    const db = client.db(dbName);//select the database
    let records = await db.collection("teacher").find().toArray();
    res.json(records);//send the teachers list to the response
})

app.delete("/deleteTeachers",async(req,res)=>{
    //destructuring
    let {name} = req.query;
    await client.connect();

    const db = client.db(dbName);//select the database
    await db.collection("teacher").deleteOne({"name":name})
    res.end({"message":"teacher is deleted!!!"});//send the teachers list to the response
})

app.put("/putTeachers",async(req,res)=>{
    //destructuring
    let {name,address} = req.query;
    await client.connect();

    const db = client.db(dbName);//select the database
    let records = await db.collection("teacher").updateOne({"name":name},{$set:{"address":address}}).toArray();
    res.end({"message":"teacher's details is updated!!!"});//send the teachers list to the response
})

app.listen(8080,()=>console.log("server is started"));
//node api-teacher-mongodb.js 
//localhost:8080/createTeachers

