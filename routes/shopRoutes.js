const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send(`<h2  style="color:tomato">Welcome to our shop</h2>`)
});

module.exports =router;