var express = require('express');
var router = express.Router();
var AboutMe=require('../models/AboutMe');
var auth=require('../middleware/auth');

/* GET AboutMe. */
router.get('/getAboutMe',auth,function(req, res, next) {
  AboutMe.find().then(
    data=>{res.json(data);
    })
    .catch((err)=>{
      res.send('could not fetch data');
    })


});

/*save AboutMe*/
router.post('/saveAboutMe',auth,function(req,res,next){ 
  console.log(req.body);
  var aboutme= new AboutMe(
    {
          AboutYourSelf:req.body.AboutYourSelf
    });


aboutme.save(function(err,result){
  if(err){throw err}
  res.send("aboutme saved");
})

})


/*Delete AboutMe*/
router.delete('/deleteAboutMe',auth,function(req,res,next){

  console.log(req.body.AboutYourSelf);
AboutMe.findOneAndDelete({"AboutYourSelf":req.body.AboutYourSelf},function(err,result){
  if(err){throw err}
  res.send("aboutme deleted");
})

})

router.put('/editAboutMe/:id',auth,function(req,res,next){
  console.log(req.params.id);
  AboutMe.findOneAndUpdate({_id:req.params.id},req.body).then(
   res.json("details updated")
  )

})




module.exports = router;
