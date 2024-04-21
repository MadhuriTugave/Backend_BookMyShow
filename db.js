const { MongoClient } = require('mongodb');
let mongoose = require("mongoose");
require("dotenv").config();


const mongoLiveURI = process.env.MONGOURL;



const connectToMongo = async () => {
    const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true} };
  await mongoose.connect(mongoLiveURI, clientOptions)
      .then(x => {
          console.log(
              `Connected to Mongo! Database name: "${x.connections[0].name}"`,
          );
      })
      .catch(err => {
          console.error('Error connecting to mongo', err);
      });
 
};
exports.connection = connectToMongo;