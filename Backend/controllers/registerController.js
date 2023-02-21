let mongoose = require('mongoose');
const register = require('../models/mongooseSchema/register');

exports.registerUser = (req,res)=>{
const data= new register({
    userName:req.body.userName,
    name:req.body.name,
    password:req.body.password,
    email:req.body.email,
    type:req.body.type,
})
 data.save().then(data=>{
    res.json(data)
 }).catch(error=>{
    res.send(error);
 })
// res.send(data)
}

exports.fetchUsers = async (req,res)=>{
    const data = await register.find({});
    res.send(data);
}