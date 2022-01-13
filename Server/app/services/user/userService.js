const mongoose=require('mongoose');
const User=require('../../Models/User');
const bcrypt=require('bcrypt');
const Booking = require('../../Models/Bookings');
const nodemailer=require('nodemailer');

class UserService{


    async signup(req,res){
        const{userName,userEmail,userPassword,userMobileNum}=req.body;
        let user={};
        user.userName=userName;
        user.userEmail=userEmail;
        user.userPassword= userPassword;
        user.userMobileNum= userMobileNum;
        let userModel =new User(user);
        await userModel.save();
        return res.status(200).json({"message":"Signup successful"});
    }
    
    async login(req, res){
        console.log("Login Attempt");
        try {
            const user = await User.findOne({
                userEmail: req.body.userEmail
            });
            if (!user) {
                return res.status(404).send("Invalid Email!");
            }
            if (req.body.userPassword != user.userPassword) {
                return res.status(404).send("Incorrect Password!");
            }
            return res.status(200).json({"message":"Login successful"});
        }catch (err) {
            console.log("ERROR:: ", err);
            return res.status(404).send("Error");
    
        }
    }
    
    getShops(req,res){
        Shop.find({},(err,result)=>{
            if(err)
                return res.status(500).json({"Message" : err.Message})
            else
                return res.status(200).send(result);
        })
    }

    getShop(req,res){
        Shop.find(
            {_id:req.body.shopId},
            (err,result)=>{
            if(err)
                return res.status(500).json({"Message" : err.Message});
            else
                return res.status(200).send(result);
        })
    }

    getSlots(req,res){
        SlotAvailability.find({
            shopId:req.body.shopId,
        },
        (err,result)=>{
        if(err)
            return res.status(500).json({"Message" : err.Message});
        else
            return res.status(200).send(result);
        })
    }

    async bookSlot(req,res) {
            const booking={};
            booking.shopId=req.body.shopId;
            booking.userEmail=req.body.userEmail;
            booking.shopName=req.body.shopName;
            booking.date=req.body.date;
            booking.slotId=req.body.slotId;
            booking.time=req.body.time;
            booking.totalCost=req.body.totalCost;
            booking.service=req.body.service;
            let bookModel=new Booking(booking);
            try{
                var book= await SlotAvailability.findOne({shopId:booking.shopId,date:booking.date});
                if(book){
                    book.slots.forEach(element => {
                        if(element._id == booking.slotId)
                            element.status = true;
                    });
                    book.save();
                    await bookModel.save();
                    res.status(200).json({"message " : "Success" });
                }
            }catch(err)
            {
                res.send(err);
            }
    }

    getBookingByEmail(req,res){
    
        console.log(req.body.userEmail);
    
    
        Booking.find({
            userEmail:req.body.userEmail
        },(err,result)=>{
            if(!err){
                res.status(200).json(result);
            }
            else{
                res.status(404).json(err);
            }
        })
    }

    sendMail() {
        const transporter=nodemailer.createTransport({
        
            service:'gmail',
        auth:{
                user:'esalonbookings@gmail.com',
                pass:'Esalon@123'
             }
        });
        let mailOptions={
            from:'esalonbookings@gmail.com',
            to: booking.userEmail,
            subject: 'Salon Booking Confirmation',
            text: 'Shop Name : ' +  bookModel.shopName + ' Date : ' +bookModel.date + ' Time : ' + bookModel.time + ' Toatal Cost : ' + bookModel.totalCost
        }
        transporter.sendMail(mailOptions,function(err,data){
        if(err){
            console.log(err);
        }
        else{
            console.log('Email Sent');
        }
})
    }
}

module.exports = new UserService();