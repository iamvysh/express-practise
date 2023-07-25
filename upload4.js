const express=require("express")
const multer=require("multer")

const app=express()
const uploads=multer({dest:"upload/"})
const port=3000


// app.use("/uploads",express.static('upload'))


app.post("/uploads",uploads.single('image'),(req,res)=>{
  res.send("immage uploaaded successfully")
})

app.listen(port,()=>{
  console.log(`server listening on ${port}  `)
})