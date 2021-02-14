var mongoose=require('mongoose');

const UserSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,' username is required'],
            index:true
        },
        section:{
            type:String,
            index:true

        },
        roll:{
            type:String,
            index:true

        }
    
   
    },
    {timestamps:true}
)

module.exports=new mongoose.model('users',UserSchema)

