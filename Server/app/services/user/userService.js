class UserService{
    
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

    bookSlot(req,res) {
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