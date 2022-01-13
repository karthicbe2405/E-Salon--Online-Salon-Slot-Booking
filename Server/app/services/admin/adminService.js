const Admin=require('../../Models/Admin');
const Shop =require('../../Models/Shop');
const Slot=require('../../Models/Slot');
const SlotAvailability=require('../../Models/SlotAvailability');
const booking=require('../../Models/Bookings');

class AdminService{
    
    adminLogin(req,res) {
        Admin.findOne({AdminId:req.body.adminId})
        .then( data => {
            const password=req.body.adminPassword;
            if(password == data.AdminPassword)
                return res.status(200).json({"Message":"Login successful"});
            else
                return res.status(404).json({"Message" : "Incorrect Password!"});
        })
        .catch( err => { return res.status(404).send("Invalid Id!"); })
    }

    async addShop(req,res){
        const {shopName,shopAddress,shopImage}=req.body;
        const shop={};
        shop.shopName=shopName;
        shop.shopAddress=shopAddress;
        shop.shopImage=shopImage;
        let shopModel=new Shop(shop);
        shopModel.save()
        .then( data => {return res.status(200).json({"Message":"Shop Added"}); })
        .catch ( err => { return res.status(500).json({"Message":"Shop Not Added"}); })
        
    }
    
    getShops(req,res) {
        Shop.find({})
        .then( data => { return res.status(200).send(data); })
        .catch ( err => { return res.status(404).send(err); })
    }
    
     updateServices(req,res){
        Shop.findOneAndUpdate(
            { _id:req.body._id},
            {$push: {
                shopServices: {
                    "serviceName":req.body.serviceName,
                    "servicePrice":req.body.serviceCost
                }
            }},
            {new: false, upsert: true })
        .then( data => { return res.status(200).json({"Message":"service Added"}); })
        .catch( err => { return res.status(404).json({"Message" : "Service Updation Failed"}); } )
    }
    
    addSlot(req,res){
        let id=req.body._id;
        let SlotId=req.body.slot;
        Slot.findOneAndUpdate(
            {shopId: id}, 
            {$push: {
                slots: {
                    "slotId":SlotId,
                    "status":false
                }
            }},
            {new: false, upsert: true }
        ).then( data => {
            return res.status(200).json({"Message":"Slot Added"});
        })
        .catch( err => {
            let slotModel=new Slot({
                shopId:id
            })
            
            slotModel.save()
            .then( data => { 
                Slot.findOneAndUpdate(
                    {shopId:slotId}, 
                    {$push: {
                        slots: {
                            "slotId":SlotId,
                            "status":false
                        }
                    }},
                    {new: false, upsert: true }
                ).then( data => {
                    return res.status(200).json({"Message":"Slot Added"});
                })  
            })
            .catch( err => { return res.status(404).json({"Message" : "Operation Failed" });})
            
        })
    }

    generateSlot(req,res){
        var date=req.body.date;
        var ShopId=req.body.shopId;
        Slot.findOne({shopId:ShopId})
        .then( data => {
            let slot = new SlotAvailability({
                shopId:data.shopId,
                date:date,
                slots:data.slots,
            })
            slot.save()
            .then( data => { return res.status(200).json({"Message":"slot Generated"});})
            
        })
        .catch( err => { return res.status(404);})
    }
    
    getBooking(req,res){
        booking.find({})
        .then( data => { return res.status(200).send(data); })
        .catch( err => { return res.status(500).send(err.message); })
    }    
}

module.exports = new AdminService();