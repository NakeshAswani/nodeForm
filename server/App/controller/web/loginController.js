const registerModel = require("../../models/userRegisterModel")

exports.loginUser=async(request,response)=>{
    let userObj={
        email:request.body.email,
        password:request.body.password
    }
    let findUser=await registerModel.find({email:userObj.email, password:userObj.password})
    response.send(findUser)
}