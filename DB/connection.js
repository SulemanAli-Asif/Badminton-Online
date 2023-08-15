const mongoose = require('mongoose');

const connectDB=async ()=>
{
    
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connection to the database successful");
    })
    .catch(err=>{
        console.log(err);
    })
    

}

module.exports=connectDB;