 
const express = require('express');//

const app = express();

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://programmerpraveenkumar:WPKbUiBWhl0lEYvl@cluster0.twdnbua.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'school';


//get post put patch delete
app.get("/getStudents",async (req,res)=>{

     // Use connect method to connect to the server
  await client.connect();
  // console.log('Connected successfully to server');
  const db = client.db(dbName);//select the database
  
  //find the records and return in the array format
  // let records =  await db.collection('student').find().toArray();
  let records =  await db.collection('student').find().toArray();
  res.json(records);//send the response to the client
})

app.post("/saveStudents",async (req,res)=>{

    let {email,name,mobile}= req.query; 
    // Use connect method to connect to the server
    await client.connect();

    const db = client.db(dbName);//select the database

    await db.collection('student').insertOne({"email":email,"mobile":mobile,"name":name})
    
    res.json({"message":"student created!!!"});//send the response to the client
})

app.delete("/deleteStudents",async (req,res)=>{

    let {name}= req.query; 
    // Use connect method to connect to the server
    await client.connect();

    const db = client.db(dbName);//select the database

    await db.collection('student').deleteOne({"name":name})
    
    res.json({"message":"student deleted!!!"});//send the response to the client
})
 
app.put("/updateStudents",async (req,res)=>{

    let {name,address}= req.query; 
    // Use connect method to connect to the server
    await client.connect();

    const db = client.db(dbName);//select the database

    await db.collection('student').updateOne({"name":name},{$set:{"address":address}})
    
    res.json({"message":"student updated!!!"});//send the response to the client
})

app.listen(8080,()=>{
    console.log("server is created..");
})