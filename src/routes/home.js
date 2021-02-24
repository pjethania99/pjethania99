var express = require('express');
var router = express.Router();
var users=require('../models/user');

/* GET user. */
router.get('/getuser', function(req, res, next) {
  users.find().then(
    data=>{res.json(data);
    })
    .catch((err)=>{
      res.send('could not fetch data');
    })


});

/*save user*/
router.post('/saveuser',function(req,res,next){
  
  
  
  var newuser= new users(
    {
          name:req.body.name,
          section:req.body.name,
          roll:req.body.roll
    });


newuser.save(function(err,result){
  if(err){throw err}
  res.send("user saved");
})

})

/*Delete user*/
router.delete('/delete',function(req,res,next){

  console.log(req.body.name);
users.findOneAndDelete({"name":req.body.name},function(err,result){
  if(err){throw err}
  res.send("user deleted");
})

})



module.exports = router;
