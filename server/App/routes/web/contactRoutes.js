let express=require("express")
const { saveForm } = require("../../controller/web/contactController")
let courseRoutes=express.Router()

courseRoutes.post("/contact-save",saveForm)

module.exports=courseRoutes