let express=require("express")
const contactRoutes = require("./routes/web/contactRoutes")
const loginRoutes = require("./routes/web/loginRoutes")
const registerRoutes = require("./routes/web/registerRoutes")
let router=express.Router()

router.get("/",(request,response)=>{
    response.send("! server is working fine !")
})
router.use("/contact",contactRoutes)
router.use("/login",loginRoutes)
router.use("/register",registerRoutes)

module.exports=router