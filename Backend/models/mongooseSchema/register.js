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
    }
})

var register = mongoose.model('register', registerSchema, 'register')

module.exports = register