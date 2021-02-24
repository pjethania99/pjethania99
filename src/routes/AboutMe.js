var express = require('express');
var router = express.Router();
var AboutMe=require('../models/AboutMe');

/* GET AboutMe. */
router.get('/getAboutMe', function(req, res, next) {
  AboutMe.find().then(
    data=>{res.json(data);
    })
    .catch((err)=>{
      res.send('could not fetch data');
    })


});

/*save AboutMe*/
router.post('/saveAboutMe',function(req,res,next){
  var aboutme= new AboutMe(
    {
          AboutYourSelf:req.body.AboutYourSelf
    });


aboutme.save(function(err,result){
  if(err){throw err}
  res.send("aboutme saved");
})

})

/* PUT AboutMe */

router.put('/putAboutMe',function(req,res,next){
  var aboutme= new AboutMe
  users.findOneAndUpdate({"name":req.body.name},req.body).then(
    res.json("aboutme updated")
  )
});

/*Delete AboutMe*/
router.delete('/deleteAboutMe',function(req,res,next){

  console.log(req.body.AboutYourSelf);
AboutMe.findOneAndDelete({"AboutYourSelf":req.body.AboutYourSelf},function(err,result){
  if(err){throw err}
  res.send("aboutme deleted");
})

})



module.exports = router;
