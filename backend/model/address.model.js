const mongoose=require("mongoose");

const addressSchema=mongoose.Schema({
    user:{type:mongoose.Types.ObjectId,ref:"user",required:true},
    address:{type:String,required:true}
})

const Addressmodel=mongoose.model("address",addressSchema);

module.exports={addressSchema}