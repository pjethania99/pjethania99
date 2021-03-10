/*var express = require('express');
var router = express.Router();

/* GET clients listing. 
router.get('/clients', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/

var express = require('express');
var router = express.Router();
const clients = require('../models/clients');
const bcrypt=require('bcrypt');//to encrypt the password recived by the user 
const jwt=require("jsonwebtoken");//jason web tocken will be used
var auth=require('../middleware/auth');//to use authorization fucntion
const {check,validationResult}=require('express-validator/check');//to check for a validation while registering 
/* GET clients. */
router.get('/getclients',auth, function(req, res, next) {
  clients.find().then(
    data=>{res.json(data);
    })
    .catch((err)=>{
      res.send('could not fetch data');
    })
});
/*save clients*/
router.post('/saveclients',function(req,res,next){
  var clients= new clients(
        {
        NameofPerson:req.body.NameofPerson,
        FirmName:req.body.FirmName,
        Address:req.body.Address,
        GSTIN:req.body.GSTIN,
        State:req.body.State,
        City:req.body.City,
        Country:req.body.Country,
        Pincode:req.body.Pincode         
        });
clients.save(function(err,result){
  if(err){throw err}
  res.send("clients saved");
})
})
/* PUT clients. */
router.put('/putclients',function(req,res){
  users.findOneAndUpdate({"name":req.body.name},req.body).then(
    res.json("clients updated")
  )
});
/*Delete clients*/
router.delete('/deleteclients',function(req,res,next){
  console.log(req.body.name);
users.findOneAndDelete({"name":req.body.name},function(err,result){
  if(err){throw err}
  res.send("clients deleted");
})
})



module.exports = router;
