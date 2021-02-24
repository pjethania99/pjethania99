const jwt=require("jsonwebtoken");
module.exports=function(req,res,next){
    const token=req.header("token");
    if(!token) return res.status(401).json({message:"Authorization failed"});
    try{
        const decoded=jwt.verify(token,"nprsspl");
        req.user=decoded.emailid;
    next();
    }catch(e){
        console.error(e);
        res.status(500).send({message:"Invalid Token"});
    };



}
