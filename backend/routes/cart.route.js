const express=require("express");
const { Authentication } = require("../middleware/Authentication");

const cartRoute=express.Router();


//adding cart item

cartRoute.post("/",Authentication,async(req,res)=>{
    const userid=req.body.userid
})

// Getting cart item for specific user

cartRoute.get("/",Authentication,async(req,res)=>{

})