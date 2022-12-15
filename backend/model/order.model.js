const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({
    product:{type:mongoose.Types.ObjectId,required:true},
    user:{type:mongoose.Types.ObjectId,required:true}
})

const Ordermodel=mongoose.model("order",orderSchema);

module.exports={Ordermodel}