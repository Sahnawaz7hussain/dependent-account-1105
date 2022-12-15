const express=require("express");
const connectDatabase=require("./config/db");
const { productRouter } = require("./routes/product.route");
const { userRoute } = require("./routes/user.route");
require("dotenv").config()
const app=express();
const PORT=process.env.PORT||8001
const cors =require("cors")
const mongoose=require("mongoose")
app.use(cors())
app.use("/user",userRoute)  
app.use("/product",productRouter)








app.listen(PORT,async()=>{
    console.log("Server has started on Port no "+PORT)
    try{
       await connectDatabase()
        console.log("DB Connected")
    }catch(err){
        console.log("DB NOT CONNECTED"+err.message)
    }

})