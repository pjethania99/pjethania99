const subjectsSchema=new mongoose.Schema(
    {
        subjectname:{
            type:String,
            required:[true,' Subject name is required'],
            index:true
        },
        mammarks:{
            type:String,
            index:true

        }
    
   
    },
    {timestamps:true}
)

module.exports=new mongoose.model('subjects',subjectsSchema)