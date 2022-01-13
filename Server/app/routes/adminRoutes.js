const express=require('express');
const route =express.Router();
const admin = require('../services/admin/adminService');

route.post('/adminLogin', (req,res)=>{
    admin.adminLogin(req,res);
});

route.post('/addShop', (req,res)=>{
    admin.addShop(req,res);
})

route.get('/getShops',(req,res)=>{
    admin.getShops(req,res);
})

route.put('/updateServices', (req,res)=>{
    admin.updateServices(req,res);
})

route.put('/addSlot', (req,res)=>{
    admin.addSlot(req,res);  
})

route.post('/generateSlot',(req,res)=>{
    admin.generateSlot(req,res);
})

route.get('/getBooking',(req,res)=>{
    admin.getBooking(req,res);
})

module.exports=route;