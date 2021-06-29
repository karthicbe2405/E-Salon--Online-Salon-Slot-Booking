import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Booking } from 'src/app/models/booking.model';
import { Shop } from 'src/app/models/shop.model';
import { Slot } from 'src/app/models/slot.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})
export class BookSlotComponent implements OnInit {

  shopId = this.actRoute.snapshot.params['shopId'];

  slots : Slot[];
  shops : Shop[];
  book = new Booking();
  popUpMessage ='';
  popUpMessageStatus = false;
  bookingConfirmation = false;

  constructor(private actRoute :ActivatedRoute,private service : UserService,private router : Router) { }

  ngOnInit(): void {
    this.fetchShop();
    this.fetchSlot();  
  }

  fetchShop(){
    var sId = JSON.parse(JSON.stringify({shopId : this.shopId}));
    this.service.getShop(sId).subscribe(data=>{
        this.shops = data;
    },errr=>{
      console.log("Error in fetching shop");
    })
  }

  fetchSlot(){
      var sId = JSON.parse(JSON.stringify({shopId : this.shopId}));
      this.service.getSlots(sId).subscribe(data =>{
          this.slots = data;
      },
      err =>{
        console.log("Error in Fetch Slot"+err);
      });
  }

  onSubmit(){
      this.book.service = this.clickedServices();
      console.log(this.book.service);
      if(this.book.date == null){
        this.popUpMessage = "Please Select Date";
        this.popUpMessageStatus = true;
      }
      else if(this.book.service.length == 0){
        this.popUpMessage = "Please Select Service";
        this.popUpMessageStatus = true;
      }
      else if(this.book.slotId == null){
        this.popUpMessage = "Please Select Time";
        this.popUpMessageStatus = true;
      }
      else{
        this.popUpMessageStatus = false;
        this.slots.forEach(element=>{
          if(this.book.date == element.date){
            element.slots?.forEach(value => {
                if(this.book.slotId == value._id){
                  this.book.time = value.slotId;
                }
            });
          }
        });
        this.bookingConfirmation = true;
      }
  }
  
  clickedServices(){
      var services : String[] = [];
      this.book.totalCost = 0;
      this.shops[0].shopServices.forEach( value => {
        if(value.isSelect){
          services.push(value.serviceName);
          this.book.totalCost = Number(this.book.totalCost) + Number(value.servicePrice);
        }
      });
      return services
  }

  confirmBooking(){
    this.book.shopId = this.shopId;
    this.book.shopName = this.shops[0].shopName;
    this.book.userEmail = String(sessionStorage.getItem("email"));
    this.service.bookSlot(this.book).subscribe(data =>{
      alert("Booking Confirmed");
      this.router.navigate(['salons/myBookings']);
    },
    err => {
      alert("Something Went Wrong");
    }
    )
  }
  cancelBooking(){
    this.bookingConfirmation = false;
  }
}
