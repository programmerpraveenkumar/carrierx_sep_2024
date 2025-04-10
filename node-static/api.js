const express = require('express')
const handlebar = require('express-handlebars');
const { MongoClient } = require('mongodb');

const app = express()
const port = 3000

//localhost:3000/home.html

// app.use(express.static('public'))
const url = 'mongodb+srv://programmerpraveenkumar:WPKbUiBWhl0lEYvl@cluster0.twdnbua.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'school';
app.engine('handlebars', handlebar.engine());
app.set('view engine', 'handlebars');
app.set('views', './public');

//localhost:3000/contact.html->

app.get("/userList",async (req,res)=>{
  // let userList = [
  //   {'name':"safs","mobile":"2k7683423432"},
  //   {'name':"safs","mobile":"76523423432"},
  //   {'name':"safs","mobile":"20803423432"},
  // ]
  // let firstname = 'asfawfwds';
  await client.connect();
  // console.log('Connected successfully to server');
  const db = client.db(dbName);//select the database
  
  //find the records and return in the array format
  // let records =  await db.collection('student').find().toArray();
  let records =  await db.collection('student').find().toArray();
  console.log(records);
  // res.json(userList);
  res.render('home',{"user":records,"mobile":89979879798});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

