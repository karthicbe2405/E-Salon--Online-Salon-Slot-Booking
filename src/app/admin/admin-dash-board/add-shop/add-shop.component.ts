import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
  form = new FormGroup({
    shopName : new FormControl('',Validators.required),
    shopAddress : new FormControl('',Validators.required),
    shopImage : new FormControl('',Validators.required)
  })
  constructor(private adminService : AdminService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
      this.adminService.addShop(this.form.value).subscribe(data =>{
          alert("Shop Added SuccessFully");
          location.reload();
      },
      err =>{
        alert("Somehting Went Wrong In our Side");
      });
  }
}
