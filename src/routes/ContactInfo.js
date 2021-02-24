var express = require('express');
var router = express.Router();
var ContactInfo=require('../models/ContactInfo');
const bcrypt=require('bcrypt');//to encrypt the password recived by the user 
const jwt=require("jsonwebtoken");//jason web tocken will be used
var auth=require('../middleware/auth');//to use authorization fucntion
const {check,validationResult}=require('express-validator/check');//to check for a validation while registering 

/* GET Contactinfo. */
router.get('/getContactInfo',auth, function(req, res, next) {
  ContactInfo.find().then(
    data=>{res.json(data);
    })
    .catch((err)=>{
      res.send('could not fetch data');
    })


});

/*save Contactinfo*/
router.post('/saveContactInfo',function(req,res,next){
  
  
  
  var contactinfo= new ContactInfo(
    {
          HouseNumber:req.body.HouseNumber,
          Street:req.body.Street,
          City:req.body.City,
          Village:req.body.Village,
          State:req.body.State,
          Country:req.body.Country,
          Pincode:req.body.Pincode,
          Name:req.body.Name

    });


contactinfo.save(function(err,result){
  if(err){throw err}
  res.send("contactinfo saved");
})

})

/* PUT Contactinfo. */

router.put('/putContactinfo',function(req,res){
  users.findOneAndUpdate({"name":req.body.name},req.body).then(
    res.json("user updated")
  )
});



/*Delete Contactinfo*/
router.delete('/deleteContactinfo',function(req,res,next){

  console.log(req.body.name);
users.findOneAndDelete({"name":req.body.name},function(err,result){
  if(err){throw err}
  res.send("user deleted");
})

})



module.exports = router;
