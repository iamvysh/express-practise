const express=require("express")
const multer=require("multer")
const app=express()
// const upload=multer({dest:'uploads/'})
const port=3000;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'upload');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({ storage: storage, fileFilter: fileFilter });


app.post('/upload',upload.single('image'),(req,res)=>{
    res.send("image uploaded successsfully")
})


app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})



