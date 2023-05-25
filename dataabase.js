
const express = require('express')
const mongoose = require("mongoose");

const mongoDB = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.0";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





