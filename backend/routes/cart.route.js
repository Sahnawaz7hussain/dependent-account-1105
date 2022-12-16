const express=require("express");
const { Authentication } = require("../middleware/Authentication");
const { Cartmodel } = require("../model/cart.model");

const cartRoute=express.Router();


//adding cart item

cartRoute.post("/",Authentication,async(req,res)=>{
    const userid=req.body.userid;
    try{
        const newItem=await Cartmodel({...req.body,user:userid})
        await newItem.save();
        res.status(200).send({"msg":"Successfully send"})
    }
    catch(err){
        res.status(404).send({msg:err.message})
    }
})

// Getting cart item for specific user

cartRoute.get("/",Authentication,async(req,res)=>{
    const userid=req.body.userid;
    try{
        const alldata=await Cartmodel.find({user:userid}).populate("product")
        res.status(200).send(alldata)
    }catch(err){
        res.status(404).send({"msg":err.message})
    }

})

//delete cart item

cartRoute.delete("/:productid",Authentication,async(req,res)=>{
    const productid=req.params.productid;
    const userid=req.body.userid
    try{
        await Cartmodel.findOneAndDelete({user:userid,product:productid});
        res.status(200).send({"msg":"Deleted Successfully"})
    }
    catch(err){
        res.status(400).send({"msg":err.message})
    }

})

// Updating Quantity

cartRoute.patch("/:productid",Authentication,async(req,res)=>{
    const userid=req.body.userid;
    const productid=req.params.productid;
    const qty=req.body.qty||1

    try{
        const update_product=await Cartmodel.findOne({product:productid,user:userid});
        if(Object.keys(update_product).length>0){
            await Cartmodel.findOneAndUpdate({product:productid,user:userid},{...update_product,qty})
            res.status(200).send({"msg":"Updated"})
        }else{
            res.status(404).send({"msg":"Invalid Request"})
        }

    }
    catch(err){
        res.status(404).send({"msg":err.message})
    }
})


module.exports={cartRoute}

