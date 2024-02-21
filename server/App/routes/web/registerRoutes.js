let express=require("express")
const { registerUser } = require("../../controller/web/registerController")
let registerRoutes=express.Router()

registerRoutes.post("/register-user",registerUser)

module.exports=registerRoutes