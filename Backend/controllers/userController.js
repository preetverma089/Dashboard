let mongoose = require('mongoose');
const users = require('../models/mongooseSchema/users')

exports.fetchUsers= async (req,res) =>{
    const user = await users.find({})
    res.send(user)
}

