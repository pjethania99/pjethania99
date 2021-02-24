var mongoose=require('mongoose');
var config=require('../config');

const mongoConfig=async ()=>{
    const connection=await mongoose.connect(config.databaseURL,()=>console.log('connected to db'),{useNewUrlParser:true,createIndexes:true});
    const connection=await mongoose.connect(config.databaseURL,()=>console.log(`Connected to db at ${config.port}`),{useNewUrlParser:true,createIndexes:true});
    return connection.connection.db;
};

module.exports=mongoConfig;