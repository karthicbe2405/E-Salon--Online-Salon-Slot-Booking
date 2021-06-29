import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  book : Booking[];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(){
    var user = JSON.parse(JSON.stringify({"userEmail" : sessionStorage.getItem("email")}))
    this.userService.fetchBookings(user).subscribe(data=>{
        this.book = data;
    },err=>{
        console.log();
    })
  }

}
