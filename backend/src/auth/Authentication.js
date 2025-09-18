const express=require("express");
const jwt=require('jsonwebtoken');
require("dotenv").config();

const veryfieauth=(req,res,next)=>{
     

    // console.log(req.headers["authorization"]);
    jwt.verify(req.headers["authorization"],process.env.JWT_SECRET,(err,user)=>{
       
        
       
    

       if(err)
       {
        return res.status(403).json({ error: "Invalid token" });
       }
        req.user=user;
       
        next();

        
    });
   

}
module.exports=veryfieauth;