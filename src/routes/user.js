var express=require('express');
var router=express.Router();
var users=require('../models/user');
const bcrypt=require('bcrypt');//to encrypt the password recived by the user 
const jwt=require("jsonwebtoken");//jason web tocken will be used
var auth=require('../middleware/auth');//to use authorization fucntion
const {check,validationResult}=require('express-validator/check');//to check for a validation while registering 



router.get('/getuser',auth,function(req,res,next){
    users.find().then(
        data=>{res.json(data)}
    ).catch
((err)=>{
    res.send('could not fetch data'+err);
})
})


//post for new user creation


router.post("/signup",
[
    check("emailid","Please enter a valid email").isEmail(),
    check("password","please enter a valid password").isLength({min:6})
],

async(req,res)=>{
    console.log("post with auth called");
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()
        });
    }



const {
    name,
    emailid,
    phone,
    city,
    password,
    usertype,

}=req.body;

try{
    let user=await users.findOne({
        emailid
    });
    if(user){
        return res.status(403).json({msg:"user Already Exists"});

    }
    user=new users({
        name,
        emailid,
        phone,
        city,
        password,
        usertype,
    });
    const salt=await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(password,salt);

    await user.save();
    const payload={
        "emailid":user.emailid,
        "name":user.name,
    }

    jwt.sign(payload,"nprsspl",
    (err,token)=>{
        if(err) throw err;
        res.status(200).json({token});

    }
    
    );


}catch(err){
    console.log(err.message);
    res.status(500).send("error in data saving");
}
}
);



router.post("/signin",
[
    check("emailid", "please enter a valid email id").isEmail(),
    check("password","minimum 6 characters required").isLength({min:6})

],
async(req,res)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()
        })
    }

    const{emailid,password}=req.body;
    try{
        let users=await user.findOne(
            {emailid});
            if(!users)
            {
                return req.status(401).json({message:"user does not exist"});
            }
            const isMatch=await bcrypt.compare(password,users.password);
            if(!isMatch)
            return res.status(402).json({message:"incorrect password"});

            const payload={
                "emailid":users.emailid,
            };

            jwt.sign(payload,"nprsspl",
            (err,token)=>{
                if(err)throw err;
                res.status(200).json({
                    token
                });
            }
            
            );

    }catch(e){
        console.error(e);
        res.status(500).json({
            message:"Server error"
        });
    }
}

);

module.exports=router;