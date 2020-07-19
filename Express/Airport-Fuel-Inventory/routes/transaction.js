var router = require('express').Router();

var Transaction = require('../model').Transaction;
var Airport = require('../model').Airport;

router.get('/',async (req,res)=>{
         await Transaction.find({}).then((info)=>{res.json(info)}).catch((err)=>{res.json(err)})
})

router.post('/',async (req,res)=>{
    let transac_details = req.body
    await Transaction.findOne({airport_name:transac_details.airport_name}).then(
        (info)=>{
           if(info != undefined )
             {   console.log('here1')
                 let newTransaction = {} 
                 newTransaction._id = transac_details._id
                 newTransaction.date_time = transac_details.date_time
                 newTransaction.Type = transac_details.Type
                 newTransaction.aircraft = transac_details.aircraft
                 newTransaction.fuel = transac_details.fuel
                 newTransaction.transaction_id_parent =  info._id
                
                 //add newest transaction to first
                 info.Transaction.unshift(newTransaction)
                 console.log(newTransaction)
                 if( newTransaction.Type == "IN")
                  info.fuel_available +=  newTransaction.fuel
                 else if(newTransaction.Type == "OUT")
                  info.fuel_available -=  newTransaction.fuel
                 console.log(info.Transaction)
                 Transaction.update({airport_name:transac_details.airport_name},{$set : {fuel_available:info.fuel_available,Transaction:info.Transaction}}).then((response)=>{
                 Airport.update({airport_name:transac_details.airport_name},{$set:{fuel_available:info.fuel_available}}).then(info=>res.json(info)).catch(err=>res.json(err))
                 }).catch((err)=>{res.json(err)})
             }
 
         else if(info == undefined){
                console.log('here2')
                let newParentTransac = {}
                let newTransaction ={}
                newParentTransac._id = Math.floor(Math.random()*100000).toString()
                newParentTransac.airport_name = transac_details.airport_name
                newParentTransac.fuel_available = 0
                newParentTransac.Transaction = []
                newTransaction._id = transac_details._id
                newTransaction.date_time = transac_details.date_time
                newTransaction.Type = transac_details.Type
                newTransaction.aircraft = transac_details.aircraft
                newTransaction.fuel = transac_details.fuel
                newTransaction.transaction_id_parent = newParentTransac._id
                newParentTransac.Transaction.unshift( newTransaction)
                if( newTransaction.Type == "IN")
                newParentTransac.fuel_available +=  newTransaction.fuel
                else if(newTransaction.Type == "OUT")
                newParentTransac.fuel_available -=  newTransaction.fuel
                console.log(newTransaction)
                console.log(newParentTransac)
                Transaction.create(newParentTransac).then((err,response)=>{
                res.json(response)
             }).catch()
         }
        }
    )
 })

 router.post('/RemoveTransaction',async (req,res)=>{
    
   let transac_details = req.body
    await Transaction.findOne({airport_name:transac_details.airport_name}).then(
        (info)=>{
            console.log(info,'here')
           if(info != undefined )
             {   
                 info.Transaction = [];
                 console.log(info.Transaction)
                 Transaction.update({airport_name:transac_details.airport_name},{$set : {Transaction:[]}}).then((response)=>{
                  res.json(response);
                 }).catch((err)=>{res.json(err)})
           }
        }).catch((err)=>{
          res.json(err)
        })
    }
)


module.exports = router