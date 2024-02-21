let express=require("express")
const { loginUser } = require("../../controller/web/loginController")
let loginRoutes=express.Router()

loginRoutes.post("/login-user",loginUser)

module.exports=loginRoutes