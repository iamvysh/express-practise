const express=require("express")
const multer=require("multer")


const app=express()
const upload=multer({dest:'uploads/'})
const port=3000



app.post("/uploads",upload.single('image'),(req,res)=>{
    res.send("image uploaded succesfully")
})



app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})

