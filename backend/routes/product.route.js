const express=require("express");
const Productmodel=require("../model/product.model")
const productRouter=express.Router();

productRouter.get("/all",async(req,res)=>{
        try{
            const allProduct=await Productmodel.find();
            res.status(200).send(allProduct)
        }
        catch(err) {
            res.status(500).send({"msg":err.message})
        }
})