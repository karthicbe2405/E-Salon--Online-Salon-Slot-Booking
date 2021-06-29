import { Component, Input, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.css']
})
export class AddSlotComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.fetchShops();
  }

  shops : Shop[] | undefined;
  @Input() slotDetails = {
    '_id' : '',
    'slot' : ''
  }

  fetchShops(){
    this.adminService.getShops().subscribe(data => {
        this.shops = data;
    },
    err =>{

    })
  }

  onSubmit(){
      console.log(this.slotDetails);
      this.adminService.sendSlot(this.slotDetails).subscribe(data =>{
        alert("Slot Added Successfully");
      } , err => {
        alert("Something Went Wrong.");
      });
  }
}
