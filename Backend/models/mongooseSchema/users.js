var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    age:{
        type:Number
    },
    Gender:{
        type:String,
    }
})

var users = mongoose.model('users', usersSchema, 'users')

module.exports = users