const mongoose=require("mongoose");

const cartSchema=mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,required:true},
    product:{type:mongoose.Types.ObjectId,required:true},
    qty:{type:Number,default:1}
})

const Cartmodel=mongoose.model("cart",cartSchema);

module.exports={cartSchema}