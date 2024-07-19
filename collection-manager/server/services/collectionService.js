const { MongoClient } = require('mongodb');

let db;
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const connectToDb = async () => {
  if (!db) {
    await client.connect();
    db = client.db('school');
  }
  return db;
};

const getCollections = async () => {
  try {
    const db = await connectToDb();
    const collections = await db.listCollections().toArray();
    return collections.map(c => c.name);
  } catch (err) {
    console.error(err);
  }
};

const getCollectionData = async (collectionName, query = {}) => {
  try {
    const db = await connectToDb();
    const collection = db.collection(collectionName);
    const documents = await collection.find(query).toArray();
    return documents;
  } catch (err) {
    console.error(err);
  }
};

const getCollectionColumns = async (collectionName) => {
  try {
    const db = await connectToDb();
    const collection = db.collection(collectionName);
    const document = await collection.findOne();
    const fieldNames = document ? Object.keys(document) : [];
    return fieldNames;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getCollections,
  getCollectionData,
  getCollectionColumns,
};