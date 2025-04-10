//express object
const express = require('express');
const router = express.Router();

const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://programmerpraveenkumar:WPKbUiBWhl0lEYvl@cluster0.twdnbua.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'school';

//http://localhost:8080/birds/
router.get('/', async(req, res) => {
    await client.connect();
    const db = client.db(dbName);//select the database
    let records = await db.collection("birds").find().toArray();
    res.json(records);//send the response
})

http://localhost:8080/birds/about
  // define the about route
router.get('/about', (req, res) => {
res.send('About birds')
})
  
module.exports = router





