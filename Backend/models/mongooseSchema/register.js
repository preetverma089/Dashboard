var mongoose = require('mongoose');

var registerSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    name:{
        type:String,
    },
    password:{
        type:String,
    },
    type:{
        type:Number
    }
})

var register = mongoose.model('register', registerSchema, 'register')

module.exports = register