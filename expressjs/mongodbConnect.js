const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://testpraveen:TOF2C1vPXQx9dEzD@cluster0.twdnbua.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'sample_mflix';

async function main(){
    //connect to mongodb server
    await client.connect();
    const db =  client.db(dbName);
    const collection = db.collection('users');

    const data = await collection.find({}).toArray();
    console.log(data);
    
    
}

main();

/*
server name->get this url from the mongodb.com
username-> will create while setup
password-> will create while setup
portno-> will be in the url of mongodb.com
*/