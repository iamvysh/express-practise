const express = require("express")
const app = express()
const port = 3000;
var bodyParser = require('body-parser')

// express.json()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let db = [

    {
        "id": 1,
        "name": "kenz",
        "email": "kenz@123",
        "username": "kenz321"
    },
    {
        "id": 2,
        "name": "popaz",
        "email": "popz@321",
        "username": "popz321"

    }



]



// get request for get all users

app.get("/users", (req, res) => {

    res.send(db)

})

// get request for fetching by id

app.get("/users/:id",(req,res)=>{
    let ID=Number(req.params.id)

  let result= db.map((obj)=>{
        if(obj.id===ID){
            return obj
        }
    })
    res.send(result)
})

// post request fot adding a new user

app.post("/users",(req,res)=>{

    let newUser=req.body
    newUser.id=Math.floor(Math.random()*100)


    db.push(newUser)
    res.send(newUser)
    res.status(200)
})


// deleter a user with id

app.delete("/users/:id",(req,res)=>{

    let Id=Number(req.params.id)
    let result=db.findIndex((item)=>item.id!==Id)
        if(result!==-1) {

            db.splice(result,1)
            res.send(result)
            res.status(201)

        }else{
            
            res.status(404).send("User not Found")

        }

        
        
})




// update a user with id



app.put("/users/:id",(req,res)=>{


    let Id=Number(req.params.id)
    let result=db.find((item)=>item.id===Id)

            if(result){
                    result.name=req.body.name;
                    result.email=req.body.email;
                    result.username=req.body.username;

                    res.send(result)
                    }
            else{

                    res.send("user not found")

                }
})





app.listen(port, () => {
    console.log(`saerver listening on ${port}`)
})