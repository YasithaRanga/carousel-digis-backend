const { db } = require('../db');

const collection = db.collection('slides');

const getRecords = async (count) => {
  const response = await collection
    .find({})
    .limit(count)
    .toArray((err, result) => {
      if (err) throw err;
      return result;
    });

  return response;
};

const createRecord = async (req) => {
  const response = await collection.insertOne({
    image: req.image,
    title: req.title,
    subTitle: req.subTitle,
  });

  return response;
};

module.exports = {
  getRecords,
  createRecord,
};
