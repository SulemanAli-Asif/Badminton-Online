const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },

    category:   { 
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    description:{
        type:String
    }
})

// productSchema.plugin(mongoosePaginate);
module.exports=mongoose.model('products',productSchema);