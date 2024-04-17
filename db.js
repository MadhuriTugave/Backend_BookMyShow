const { MongoClient } = require('mongodb');
let mongoose = require("mongoose");
require("dotenv").config();


const mongoLiveURI = process.env.MONGOURL;



const connectToMongo = async () => {
  await mongoose.connect(mongoLiveURI, {
   
    useNewUrlParser: true, 
    useUnifiedTopology: true
     
  })
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