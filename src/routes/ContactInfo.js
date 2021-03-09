var express = require('express');
var router = express.Router();
var ContactInfo=require('../models/ContactInfo');
var auth=require('../middleware/auth');

/* GET Contactinfo. */
router.get('/getContactInfo',auth,function(req, res, next) {
  ContactInfo.find().then(
    data=>{res.json(data);
    })
    .catch((err)=>{
      res.send('could not fetch data');
    })


});

/*save Contactinfo*/
router.post('/saveContactInfo',auth,function(req,res,next){
  console.log(req.body);
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

/*Delete Contactinfo*/
router.delete('/deleteContactInfo',auth,function(req,res,next){

  console.log(req.body.HouseNumber);
ContactInfo.findOneAndDelete({"HouseNumber":req.body.HouseNumber},function(err,result){
  if(err){throw err}
  res.send("House Number deleted");
})

})

router.put('/editContactInfo',auth,function(req,res,next){
  var HouseNumber=req.body.HouseNumber;
  var Street=req.body.Street;

 ContactInfo.findOneAndUpdate({"HouseNumber":"1167"},{"HouseNumber":HouseNumber,"Street":Street}).then(
   res.json("details updated")
 )

})


module.exports = router;
