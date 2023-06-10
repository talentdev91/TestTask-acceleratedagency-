const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

// To retrieve all users from the MongoDB "users" collection with the email domain "example.com"

async function getUsersByEmailDomain() { 
  try {
    await client.connect();

    const database = client.db('testdb');
    const collection = database.collection('users');

    const query = { email: { $regex: /example.com$/ } };
    const users = await collection.find(query).toArray();

    console.log('Users with email domain "example.com":');
    console.log(users);
  } catch (error) {
    console.log('Error:', error);
  } finally {
    await client.close();
  }
}

getUsersByEmailDomain();