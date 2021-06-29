import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  book : Booking[];

  constructor(private adminService : AdminService) { }
  ngOnInit(): void {
    this.fetchBookings();
  }
  fetchBookings(){
    this.adminService.fetchBookings().subscribe(data=>{
            this.book = data;
    },err=>{
        
    })
  }

}
