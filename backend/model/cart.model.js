const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:"user",required:true},
    product:{type:mongoose.Types.ObjectId,ref:"product",required:true},
    qty:{type:Number,default:1}
})

const Cartmodel=mongoose.model("cart",cartSchema);

module.exports={Cartmodel}