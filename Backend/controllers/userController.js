let mongoose = require('mongoose');
const users = require('../models/mongooseSchema/users')
const register = require('../models/mongooseSchema/register')

exports.fetchUsers= async (req,res) =>{
    const user = await users.find({})
    res.send(user)
}
exports.loginUsers = async(req,res)=>{
const user = await register.find({
    userName:req.body.name,
    password: req.body.password,
    type: 1
})
res.send({
result:user,
statusCode:"200"
})
}

