import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  constructor(private serviceObject : UserService,private router : Router) { }

  ngOnInit(): void {
    this.checkSession();
  }

  login(){
    console.log(this.user);
    this.serviceObject.loginService(this.user).subscribe(
      data => {
        alert("Login SuccessFull");
        this.storeLogin(this.user.userEmail);
        this.router.navigate(['/salons']);
      },
      err => {
        alert("Invalid Login");
      }
      );
  }
  public storeLogin(email:string){
    sessionStorage.setItem("email",email);
  }
  public checkSession(){
    if(sessionStorage.getItem("email") != null){
      this.router.navigate(['']);
    }
  }
}
