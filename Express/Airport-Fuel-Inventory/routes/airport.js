var router = require('express').Router();
var Airport = require('../model').Airport;
var Transaction = require('../model').Transaction;

function addAirportDetails(req,res){
    let airport_details = req.body
    Airport.findOne({_id:airport_details._id}).then((info)=>{

      if(info !=undefined){
          let _airport = {}
          _airport.fuel_available = airport_details.fuel_available;
          Airport.update({_id:airport_details._id},{$set:{fuel_available: _airport.fuel_available}}).then((response)=>{
              res.json(resppnse);
          }).catch((err)=>{
              res.json(err);
          })
      }
      else if(info == undefined){
          let new_airport = {}
          new_airport._id = airport_details._id;
          new_airport.airport_name = airport_details.airport_name;
          new_airport.fuel_capacity = airport_details.fuel_capacity;
          new_airport.fuel_available = airport_details.fuel_available;
          Airport.create(new_airport).then((info)=>{
               let newParentTransac = {}
                newParentTransac._id = Math.floor(Math.random()*100000).toString()
                newParentTransac.airport_name = airport_details.airport_name;
                newParentTransac.fuel_available = airport_details.fuel_available;
                newParentTransac.Transaction = [] 
                Transaction.create(newParentTransac).then((info)=>{ res.json(info)}).catch((err)=>{res.json(err)})
          }).catch((err)=>{
           res.json(err)
          })
      }
    }).catch((err)=>{
        res.json(err)
    })
 }

//  newParentTransac._id = Math.floor(Math.random()*100000).toString()
//                 newParentTransac.Airport_name = transac_details.airport_name
//                 newParentTransac.Fuel_available = 0
//                 newParentTransac.Transaction = []

 function getAirportList(req,res){

    Airport.find({}).then((info)=>{
      console.log(info)
      res.json(info)
    }).catch((err)=>{res.json(err)})
}

router.get('/',getAirportList)

router.post('/',addAirportDetails)

router.put('/',updateAirportDetails)

router.delete('/',delAirport)


function updateAirportDetails(req,res){

}

function delAirport(req,res){

}

module.exports = router