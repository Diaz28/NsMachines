//Declares the necessary imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routes = require("./api/routes.js");

dotenv.config();

const db = mongoose.connection;

const port = process.env.PORT || 5000;


// Establishes the connection with the Mongodb database
mongoose.connect(
    process.env.BARCELPARTS_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

//Creates the express
const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/routes" , routes);
app.use("*", (req,res)=> res.status(404).json({error:"not found"}));

//Listens on the port to retrieve information from frontend 
app.listen(port,() => {
    console.log('listening on port ' + port);
})