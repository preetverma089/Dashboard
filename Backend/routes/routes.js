const express  = require("express");
const router = express.Router();

router.get('/users',async(req,res,next)=>{
    res.send("Hello this from Server")
})
















module.exports = router