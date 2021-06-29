import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form = new FormGroup({
    adminId : new FormControl('',Validators.required),
    adminPassword : new FormControl('',Validators.required)
  })

  constructor(private router : Router,private adminService : AdminService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.adminService.adminLogin(this.form.value).subscribe(data => {
      console.log("loginSuccessFull");
      sessionStorage.setItem("admin",data.adminId);
      alert("Login Success Full");
      this.router.navigate(['/admin']);
    },
    err =>{
      console.log("Login Failed");
      alert("Login Failed");
    });
  }
}
