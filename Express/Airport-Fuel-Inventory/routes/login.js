var router = require('express').Router();

var cred = {user:'admin',password:'Admin@2020'}
router.get('/',authenticate)

var authenticate = (req,res,next)=>{
    var client_cred  = req.body;
    if(client_cred.email == cred.user && client_cred.password == cred.password){
       res.json({status:"verified"})
    }
    else 
      res.json({status:'error'})
}