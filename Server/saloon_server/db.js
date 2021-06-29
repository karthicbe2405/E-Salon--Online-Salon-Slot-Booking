const mongoose=require('mongoose')
const mongo_URI = 'mongodb+srv://karthicbe2405:Tacmmongodb22@cluster0.p3b32.mongodb.net/esalon?retryWrites=true&w=majority';
//const mongo_URI='mongodb+srv://saloon:harikrish@cluster0.8fdf2.mongodb.net/saloon?retryWrites=true&w=majority';

let db = mongoose.connect(mongo_URI,{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false},(err)=>{
    if(!err){
        console.log("DB Connected Successfully");
    }
    else{
        console.log(err);
        console.log("DB Connection UnsuccessFull");
    }
})
module.exports=mongoose;