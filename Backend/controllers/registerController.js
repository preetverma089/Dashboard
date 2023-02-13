let mongoose = require('mongoose');
const register = require('../models/mongooseSchema/register');

exports.registerUser = async (req,res)=>{
const data= new register({
    userName:req.body.userName,
    name:req.body.name,
    password:req.body.password,
    email:req.body.email
})
await data.save();
res.send(data)
}

exports.fetchUsers = async (req,res)=>{
    const data = await register.find({});
    res.send(data);
}