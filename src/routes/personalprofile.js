var express = require('express');
var router = express.Router();
var personalprofile = require('../models/personalprofile');

/* Personal Profile */

router.get('/getpersonalprofile', function(req, res, next) {
    personalprofile.find().then(
      data=>{res.json(data);
      })
      .catch((err)=>{
        res.send('could not fetch data');
      })


  });

/* Post New Personal Profile */  
  router.post('/savepersonalprofile',function(req,res,next){
    console.log(req.body);
    var newpersonalprofile= new personalprofile(
      {
            Name:req.body.Name,
            Father:req.body.Father,
            Mother:req.body.Mother,
            DateofBirth:req.body.DateofBirth,
            BirthTime:req.body.BirthTime,
            BirthPlace:req.body.BirthPlace,
            Height:req.body.Height,
            Profession:req.body.Profession,
            Qualification:req.body.Qualification,
            NameofOrganisation:req.body.NameofOrganisation,
            GotraFather:req.body.GotraFather,
            GotraMother:req.body.GotraMother,
            MobileNumber:req.body.MobileNumber,
            PhotoLink1:req.body.PhotoLink1,
            PhotoLink2:req.body.PhotoLink2,
            Married:req.body.Married,
            /*ContactInfo:req.body.ContactInfo,
            PresentAddress:req.body.PresentAddress,
            PermanentAddress:req.body.PermanentAddress,
            Hobbies:req.body.Hobbies,
            About:req.body.About*/
      });

    newpersonalprofile.save(function(err,result){
    if(err){throw err}
    res.send("personal profile saved");

  })

})

/* Delete Personal Profile */

router.delete('/deletepersonalprofile',function(req,res,next){

  console.log(req.body.Name);
  personalprofile.findOneAndDelete({"Name":req.body.Name},function(err,result){
  if(err){throw err}
  res.send("personal profile is deleted");
})

})

module.exports = router;