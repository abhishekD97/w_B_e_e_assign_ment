const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require('dotenv').config();

const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());

const uri = process.env.URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function(){
  console.log("MongoDB Connected");
})

const driverRouter = require("./routes/drivers");

app.use('/driver', driverRouter);

app.listen(process.env.PORT|3000, function(){
  console.log("server up at 3000")
})
