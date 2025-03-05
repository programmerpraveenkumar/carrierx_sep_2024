//express object
const express = require('express');

const app = express();

app.use(express.json());///configure for request body 


///database configuration
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://programmerpraveenkumar:WPKbUiBWhl0lEYvl@cluster0.twdnbua.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'school';


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
    await db.collection("teacher").deleteOne({"name":name}).toArray();
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

