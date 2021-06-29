import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Shop } from 'src/app/models/shop.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  shops : Shop[] | undefined;
  
  //form = new FormGroup({
    //shopService : new FormControl('',Validators.required)
  //})

  @Input() serviceDetails = {
    '_id' : '',
    'serviceName' : '',
    'serviceCost' : Number,
  }
  constructor(private adminService : AdminService) { }

  ngOnInit(): void {
    this.fetchShops();
  }

  fetchShops(){
    this.adminService.getShops().subscribe(data => {
        this.shops = data;
    },
    err =>{

    })
  }

  onSubmit(){
      console.log(this.serviceDetails);
      this.adminService.sendService(this.serviceDetails).subscribe(data =>{
        alert("Service Added Successfully");
      } , err => {
        alert("Something Went Wrong.");
      });
  }
}
