const express=require('express');
const router=express.Router();

router.use("",(req,res)=>{
    res.send(`<h2>404 not found</h2>`)
});

module.exports=router;