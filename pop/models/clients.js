var mongoose=require('mongoose');
const clientsSchema=new mongoose.Schema(
    /*Name of the person receiving*/
    {
        NameofPerson:{
            type:String,
            required:[true,' nameofperson. is required'],
            index:true,    
        },
    /*firms name*/   
        FirmName:{
            type:String,
            required:[true,' firmname. is required'],
            index:true,       
        }, 
    /*Address of the firm*/
        Address:{
            type:String,
           /* required:[true,' address. is required'],*/
            index:true,
        },
    /*GSTIN of the firm*/
        GSTIN:{
            type:String,
            required:[true,' gstin. is required'],
            index:true,
        }, 
    /*state of the firm*/
        State:{
            type:String,
           /* required:[true,' statename. is required'],*/
            index:true,
        }, 
    /*city of the firm*/
        City:{
            type:String,
           /* required:[true,' cityname. is required'],*/
            index:true,
        }, 
    /*country of the firm*/
        Country:{
            type:String,
           /* required:[true,' countryname. is required'],*/
            index:true,
        },
    /*pincode of the firm*/
        Pincode:{
            type:String,
            /*required:[true,' pincode. is required'],*/
            index:true,
        },       
    },
    {timestamps:true}
)
module.exports=new mongoose.model('clients',clientsSchema)