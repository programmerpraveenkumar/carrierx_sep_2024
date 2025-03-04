//adding the mongodb library
const { MongoClient, ReturnDocument } = require('mongodb');


// Connection URL
const url = 'mongodb+srv://programmerpraveenkumar:WPKbUiBWhl0lEYvl@cluster0.twdnbua.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'school';


//define the function
async function insert() {
  // Use connect method to connect to the server
  await client.connect();
  // console.log('Connected successfully to server');
  const db = client.db(dbName);//select the database
  //insert the records
  db.collection('student').insertOne({"name":"praveen","address":"banglore"})
  console.log("data is inserted.");
}



async function reading() {
  // Use connect method to connect to the server
  await client.connect();
  // console.log('Connected successfully to server');
  const db = client.db(dbName);//select the database
  
  //find the records and return in the array format
  // let records =  await db.collection('student').find().toArray();
  let records =  await db.collection('student').find({"firstName":"asdf"}).toArray();
  console.log(records);
}


async function deleteDocuments() {
  // Use connect method to connect to the server
  await client.connect();
  // console.log('Connected successfully to server');
  const db = client.db(dbName);//select the database
  
  //find the records and return in the array format
  // let records =  await db.collection('student').find().toArray();
   await db.collection('student').deleteOne({"firstName":"asdf"});
}
// deleteDocuments();//delete documents
// reading();
// main();//calling the function

async function updateDocuments() {
  // Use connect method to connect to the server
  await client.connect();
  // console.log('Connected successfully to server');
  const db = client.db(dbName);//select the database
  
  //find the records and return in the array format
  // let records =  await db.collection('student').find().toArray();
   await db.collection('student').updateOne({"name":"some name"},{ $set: { "mobile": "8979797" } })
   console.log("updated records!!!");
   
}
updateDocuments()