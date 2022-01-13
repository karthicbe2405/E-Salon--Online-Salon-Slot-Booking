const User=require('../../Models/User');
const bcrypt=require('bcrypt');
const Booking = require('../../Models/Bookings');
const nodemailer=require('nodemailer');
class UserService{

    signup(req,res){
        const{userName,userEmail,userPassword,userMobileNum}=req.body;
        let user={};
        user.userName=userName;
        user.userEmail=userEmail;
        user.userPassword= userPassword;
        user.userMobileNum= userMobileNum;
        let userModel =new User(user);
        userModel.save()
        .then( data => { return res.status(200).json({"Message":"Signup successful"}); })
        .catch( err => { return res.status(500).json({"Message" : "User Resgistration Unsuccessfull"}); })
        
    }
    
    login(req, res){
        try {
            User.findOne({userEmail: req.body.userEmail})
            .then( data => {
                if (req.body.userPassword != data.userPassword)
                    return res.status(404).json({"Message" : "Incorrect Password!"});
                else
                    return res.status(200).json({"Message":"Login successful"});
            })
            .catch ( err => { return res.status(404).send("Invalid Email!"); })
            
        }catch (err) {
            return res.status(404).send("Error");
        }
    }
    
    getShops(req,res){
        Shop.find({})
        .then( data => { return res.status(200).send(data); })
        .catch( err => { return res.status(500).json({"Message" : err.Message}); })
    }

    getShop(req,res){
        Shop.find({_id:req.body.shopId})
        .then( data => { return res.status(200).send(data); })
        .catch( err => { return res.status(500).json({"Message" : err.Message}); })
    }

    getSlots(req,res){
        SlotAvailability.find({shopId:req.body.shopId})
        .then( data => { return res.status(200).send(result) })
        .catch( err => { return res.status(500).json({"Message" : err.Message}); })
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
                let book= await SlotAvailability.findOne({shopId:booking.shopId,date:booking.date});
                book.slots.forEach(element => {
                    if(element._id == booking.slotId) 
                        element.status = true;
                    });
                book.save()
                .then( data => {
                    bookModel.save()
                    .then( data => { return res.status(200).json({"message " : "Success" }); })
                    .catch( err => { return res.status(500).json({"Message" : "Booking Failes"})})
                })
                .catch( err => { return res.status(500).json({"Message" : "Booking Failes"}); });   
            }catch(err){
                return res.status(500).send(err);
            }
    }

    getBookingByEmail(req,res){
        Booking.find({userEmail:req.body.userEmail})
        .then( data => { return res.status(200).json(data); })
        .catch( err => { return res.status(404).json(err); })
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