const mongoose = require("mongoose")
const { Schema } = mongoose;

const registerSchema = new Schema({
    Name: {
        type: String,
        required: true,
        maxLength: 25
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true,
        maxLength: 6
    },
    password: {
        type: String,
        required: true
    },
})

let registerModel = mongoose.model("users", registerSchema)

module.exports = registerModel