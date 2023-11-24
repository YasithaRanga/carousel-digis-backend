const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@carousel.ckbuns7.mongodb.net/?retryWrites=true&w=majority`;
const mongoclient = new MongoClient(uri);

const connectDb = async () => {
  try {
    await mongoclient.connect();
    console.log(`Connected to MongoDB`);
  } catch (e) {
    console.log(e);
  }
};

let db = mongoclient.db('carousel');

module.exports = {
  db,
  connectDb,
};
