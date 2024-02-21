let registerModel = require("../../models/userRegisterModel")

exports.registerUser = async (request, response) => {
    let userObj = {
        Name: request.body.Name,
        email: request.body.email,
        phone: request.body.phone,
        address: request.body.address,
        pincode: request.body.pincode,
        password: request.body.password
    }
    let insertData = await registerModel(userObj)
    insertData.save().then((insertRes) => {
        response.send(insertRes)
    })
        .catch((error) => {
            response.send(error)
        })
}