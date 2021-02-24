var mongoose=require('mongoose');

const PersonalprofileSchema=new mongoose.Schema(
    {
        Name:{
            type:String,
            required:[true,'username is required'],
            max:15,
            min:1,
            index:true
        },
        Father:{
            type:String,
            required:[true,'father name is required'],
            max:15,
            min:1,
            index:true
        },
        Mother:{
            type:String,
            required:[true,'mother name is required'],
            max:15,
            min:1,
            index:true

        },
        DateofBirth:{
            type:Date,
            required:[true,'date of birth is required'],
            index:true
        },
        BirthTime:{
            type:String,
            required:[true,'birth time is required'],
            index:true
        },
        BirthPlace:{
            type:String,
            required:[true,'birth place is required'],
            max:15,
            min:1,    
            index:true
        },
        Height:{
            type:String
        },
        Profession:{
            type:String,
            required:[true,'profession is required'],
            max:15,
            min:1,
            index:true
        },
        Qualification:{
            type:String,
            required:[true,'qualification is required'],
            max:15,
            min:1,
            index:true
        },
        NameofOrganisation:{
            type:String,
            required:[true,'name of organisation is required'],
            max:25,
            min:1,
            index:true
        },
        GotraFather:{
            type:String,
            max:15,
            min:1,
            required:[true,'gotra of father is required'],
            index:true
        },
        GotraMother:{
            type:String,
            max:15,
            min:1,
            required:[true,'gotra of mother is required'],
            index:true
        },
        MobileNumber:{
            type:String,
            max:15,
            min:1,
            required:[true,'gotra of mother is required'],
            index:true
        },
        PhotoLink1:{
            type:String,
            required:[true,'link is required']
        },
        PhotoLink2:{
            type:String
        },
        Married:{
            type:String,
            max:1,
            min:1,
            required:[true,'field is required, fill 1 for married and 0 for unmarried'],
            index:true
        },
        ContactInfo:{
            type:mongoose.Types.ObjectId,
            //required:[true,'contact info is required'],
            index:true
        },
        PresentAddress:{
            type:mongoose.Types.ObjectId,
           // required:[true,'present address is required'],
            index:true
        },
        PermanentAddress:{
            type:mongoose.Types.ObjectId,
            //required:[true,'permanent address is required'],
            index:true
        },
        Hobbies:{
            type:mongoose.Types.ObjectId
        },
        About:{
            type:mongoose.Types.ObjectId
        }

    },
    {timestamps:true}
)

module.exports=new mongoose.model('personalprofile',PersonalprofileSchema);