const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    title:{type:String,required:true},
    stock:{type:Number,default:190},
    cost:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,default:"other"},
    brand:{type:String,default:"other"}

})

const Productmodel=mongoose.model("product",productSchema);


module.exports={Productmodel}