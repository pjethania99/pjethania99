var mongoose=require('mongoose');

const ContactinfoSchema=new mongoose.Schema(
    {
        HouseNumber:{
            type:String,
            required:[true,' houseno. is required'],
            index:true,
            max:10
        },
        Street:{
            type:String,
            required:[true,' streetno. is required'],
            index:true,
            max:15
        }, 
        City:{
            type:String,
            required:[true,' cityname is required'],
            index:true,
            max:15
        }, 
        Village:{
            type:String,
            required:[true,' villagename is required'],
            index:true,
            max:15
        },
        State:{
            type:String,
            required:[true,' statename is required'],
            index:true,
            max:15
        }, 
        Country:{
            type:String,
            required:[true,' countryname is required'],
            index:true,
            max:15
        },
        Pincode:{
            type:String,
            required:[true,' pincode is required'],
            index:true,
            max:15
        }, 
        Name:{
            type:String,
            required:[true,' username is required'],
            index:true,
            max:15
        } 

    },

    {timestamps:true}
)


module.exports=new mongoose.model('ContactInfo',ContactinfoSchema)