const registerModel = require("../../models/userRegisterModel")
var jwt = require('jsonwebtoken');
let tokenKey="myApp"

exports.loginUser=async(request,response)=>{
    let userObj={
        email:request.body.email,
        password:request.body.password
    }
    let obj
    try{
        let findUser=await registerModel.findOne({email:userObj.email, password:userObj.password})
        var token = await jwt.sign({ id: findUser.id }, tokenKey)
        obj={
            findUser,
            token
        }
    }
    catch{
        obj={status:0}
    }
    response.send(obj)
}