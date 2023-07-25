
const express = require('express')
const mongoose = require("mongoose");

const mongoDB = "mongodb+srv://vyshnavthaithottathil:LFPtJImLMzMuOVkL@cluster0.xzzhpvy.mongodb.net/";

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





