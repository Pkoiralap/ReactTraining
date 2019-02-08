import { MongoClient, ObjectID } from 'mongodb';
import mongoConfig from './mongoConfig';

class DatabaseHander {
  constructor(manualUrl) {
    if (manualUrl) {
      this.url = manualUrl;
    } else {
      this.url = mongoConfig.url;
    }
  }
  createDatabase = async () => {
    try {
      const database = await MongoClient.connect(this.url);
      this.database = database.db(mongoConfig.dbName);
      return this.database;
    } catch (err) {
      return {
        success: false,
        message:
        `Could not connect to the url. Can be due to 
          1) Bad Url. 
          2) Sleeping Mongo Server. 
          3) Database already exists`,
      };
    }
  }
  createCollection = (name, options) => this.database.createCollection(name, options)
  createDocument = (collection, doc) => {
    const col = this.database.collection(collection);
    return col.insertOne(doc);
  }
  replaceDocument = (collection, doc) => {
    const col = this.database.collection(collection);
    const { _id, ...restDoc } = doc;
    return col.replaceOne({ _id: new ObjectID(_id) }, restDoc);
  }
  getAllDocument = (collection, options) => {
    try {
      const col = this.database.collection(collection);
      return col.find(options);
    } catch (error) {
      return { success: false, error };
    }
  }
  getDocuments = (collection, conditionObject = {}, projectionObject) => {
    try {
      const col = this.database.collection(collection);
      if (projectionObject) {
        return col.find(conditionObject).project(projectionObject);
      }
      return col.find(conditionObject);
    } catch (error) {
      return { success: false, error };
    }
  }
  deleteOne = (collection, data) => {
    try {
      const col = this.database.collection(collection);
      return col.deleteOne({ _id: new ObjectID(data._id) });
    } catch (error) {
      return { success: false, error };
    }
  }
  updateOneDocument = (collection, searchObject, data) => {
    try {
      const { _id, ...updatedData } = data;
      const col = this.database.collection(collection);
      return col.updateOne(
        { _id: new ObjectID(searchObject._id) },
        { $set: updatedData },
        { upsert: false },
      );
    } catch (error) {
      return { success: false, error };
    }
  }
  findById = (collection, id) => {
    try {
      const col = this.database.collection(collection);
      return col.findOne({ _id: new ObjectID(id) });
    } catch (error) {
      throw error;
    }
  }
}

const db = new DatabaseHander();

const insertDummyDocument = () => db.createDocument('Test', {
  _id: ObjectID('5b8b7883bc552dc7ea43e135'),
  key: 'value',
  test: 'best',
}).catch(err => {
  console.log(err.message);
  return Promise.resolve();
});

export const initDatabase = () => {
  // runs good tested
// need to have mongodb installed and mongod server running in port specified in mongoConfig.js file
// testing mongoDB
  console.log('Initializing database ....')
  db.createDatabase()
    .then(() => db.createCollection('Test'))
    .then(() => insertDummyDocument())
    .catch((err) => {
      console.log('obtained error while creating collection', err.message);
    });
};

export default db;
