var mongoose=require('mongoose');

const AboutMeSchema=new mongoose.Schema(
    {
        AboutYourSelf:{
            type:String,
            required:[true,'username is required'],
            index:true,
            max:100,
            minlimit:20
        }
    },
    {timestamps:true}
)

module.exports=new mongoose.model('AboutMe',AboutMeSchema)