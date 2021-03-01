const router = require('express').Router();
let Driver = require('../models/driver.model');

/* GET users listing. */
router.route('/:vehicleNumber').get(function(req,res){
  Driver.find(function(err,foundDriver){
    vehicleNumber = req.params.vehicleNumber;
    Driver.find({vehicleID:vehicleNumber}, function(err, vehicleFound){
    if(err){
      res.send(err);
    }else{
      res.send(vehicleFound);
    }
  })
  })
})

router.route("/").post(function(req,res){
  const name = req.body.name;
  const vehicleID = req.body.vehicleID;  
  const rating = req.body.rating; 
  const tripsCompleted = req.body.tripsCompleted;
  const cost = req.body.cost;
  const location = req.body.location;
  const state = req.body.state;

  const driver = new Driver({
    name: name,
    vehicleID: vehicleID,
    rating: rating,
    tripsCompleted: tripsCompleted,
    cost: cost,
    location: location,
    state: state
  })

  driver.save(function(err){
    if(err){
      res.send(err);
    }else{
      res.send("success")
    }
  });
})

module.exports = router;