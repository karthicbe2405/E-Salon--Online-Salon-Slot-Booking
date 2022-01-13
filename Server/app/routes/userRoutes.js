const express = require('express');
const route=express.Router();
const user = require('../services/user/userService');

route.post('/signup',async(req,res)=>{
    user.signup(req,res);
});

route.post('/login', (req, res) => {
  user.login(req,res);  
})
route.get('/getShops',(req,res)=>{
    user.getShops(req,res);
})
route.post('/getShop',(req,res)=>{
    user.getShop(req,res);
})
route.post('/getSlots',(req,res)=>{
    user.getSlots(req,res);
})

route.post('/bookSlot',async(req,res)=>{
    user.bookSlot(req,res);
})

route.post('/getBookingByEmail',(req,res)=>{
    user.getBookingByEmail(req,res);
})


module.exports=route;

