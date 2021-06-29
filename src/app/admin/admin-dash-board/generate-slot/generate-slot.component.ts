import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-generate-slot',
  templateUrl: './generate-slot.component.html',
  styleUrls: ['./generate-slot.component.css'],
  providers: [DatePipe]
})
export class GenerateSlotComponent implements OnInit {

  date = new Date();
  minDate : string | null | undefined;

  constructor(private adminService : AdminService,private datePipe : DatePipe) { 

  }

  ngOnInit(): void {
    this.fetchShops();
    console.log(this.minDate);
    this.minDate=this.datePipe.transform(this.date, 'yyyy-MM-dd');
  }

  shops : Shop[] | undefined;
  @Input() slotDetails = {
    'shopId' : '',
    'date' : ''
  }

  fetchShops(){
    this.adminService.getShops().subscribe(data => {
        this.shops = data;
    },
    err =>{
        console.log("Error in Fetching Shops");
    })
  }

  onSubmit(){
     this.adminService.generateSlot(this.slotDetails).subscribe(data =>{
        alert("Slots Generated Successfully");
      } , err => {
        alert("Something Went Wrong.");
      });
  }
}
