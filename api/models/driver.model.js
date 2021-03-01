const mongoose = require("mongoose");


const driverSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    vehicleID:{
      type:String,
      required:true
    },
    rating:{
      type:Number,
      required:true
    },
    tripsCompleted:{
      type:Number,
      required:true
    },
    cost:{
      type:Number,
      required:true
    },
    location:{
      type:String,
      required:true
    },
    state:{
      type:String,
      required:true
    },
    tripState:{
      type:Date,
      default: Date.now
    }
  })
  
  const Driver = mongoose.model("Driver", driverSchema)

  module.exports = Driver;