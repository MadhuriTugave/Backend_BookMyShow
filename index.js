const express = require("express");
const app = express();
const { connection } = require("./db.js");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();



// app.use( bodyParser.urlencoded({ extended: true }) );
// app.use( bodyParser.json() );
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use( cors() );



// creating an api and seperating it.
app.get("/", async (req, res) => {
    res.send("Made with Madhuri")
})
// Connecting to database

// connection();

const bookingRoute = require("./Routes/AllRoutes.js")
app.use("/api", bookingRoute);
connection();

// listening backend on a port.
const port = process.env.PORT || 8000;
app.listen( port, () => console.log(`App listening on port ${port}!`) );

