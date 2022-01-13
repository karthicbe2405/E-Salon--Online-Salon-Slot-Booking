const mongoose=require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const mongo_URI = process.env.dbConnectionURL;

let db = mongoose.connect(mongo_URI,{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false},(err)=>{
    if(!err){
        console.log("DB Connected Successfully");
    }
    else{
        console.log(err);
        console.log("DB Connection UnsuccessFull");
    }
})
module.exports = mongoose;