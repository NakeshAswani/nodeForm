let express=require("express")
let cors=require("cors")
let router=require("./App/router")
let mongoose = require('mongoose');

let server=express()
server.use(cors())
server.use(express.json())
server.use(router)

mongoose.connect('mongodb://127.0.0.1:27017/demoForm')
.then(() => {
      server.listen("8000")
  });