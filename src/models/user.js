var mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'User name is required'],
            index:true
        },
        emailid:{
            type:String,
            required:[true,'User email is required'],
            index:true

        },
        phone:{
            type:String,
            required:[true,'User phone is required'],
            index:true
        },
        usertype:{
            type:String,
            required:[true,'User type is required'],
            index:true
        },
        city:{
        type:String,
            required:[true,'User city is required'],
            index:true
        },
        password:{
            type:String,
                required:[true,'password is required'],
                index:true
        }
    

    }
);

module.exports=new mongoose.model('users',userSchema)