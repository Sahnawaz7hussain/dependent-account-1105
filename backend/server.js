const express=require("express");
const { userRoute } = require("./routes/user.route");
require("dotenv").config()
const app=express();
const PORT=process.env.PORT||8001


app.use("/user",userRoute)  











app.listen(PORT,()=>{
    console.log("Server has started on Port no "+PORT)
})