const express=require("express");
const { Authentication } = require("../middleware/Authentication");
const { Ordermodel } = require("../model/order.model");

const orderRoute=express.Router();


// all orders of specific user

orderRoute.get("/",Authentication,async(req,res)=>{
   const userid=req.body.user;
   
   try
   {    
    const allorders=await Ordermodel.find({user:userid});
    res.status(200).send(allorders)
   }
   catch(err){
    res.status(404).send({"msg":err.message})
   }
})

// Adding item to order

orderRoute.post("/",Authentication,async(req,res)=>{
    const userid=req.body.userid;
    try{
        const newOrder=await Ordermodel({...req.body,user:userid});
        await newOrder.save();
        res.status(200).send({"msg":"Order successfull"})
    }catch(err){
        res.status(404).send({"msg":err.message})
    }
})

module.exports={orderRoute}