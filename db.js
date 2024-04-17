const { MongoClient } = require('mongodb');
let mongoose = require("mongoose");
require("dotenv").config();


const mongoLiveURI = process.env.MONGOURL;



const connectToMongo = async () => {
  // Connecting to database using connection string  
 await mongoose
    .connect( mongoLiveURI, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
           
        }
        ,
         { bufferMaxEntries: 0 }
    )
    .then(() => {
      console.log("MongoDB Database connected");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};

exports.connection = connectToMongo;