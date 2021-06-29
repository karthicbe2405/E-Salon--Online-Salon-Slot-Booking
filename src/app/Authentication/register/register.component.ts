import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  
  @Input() confirmPassword : string = "";



  constructor(private serviceObject : UserService,private router : Router) { }

  ngOnInit(): void {
    this.checkSession();
  }

  public register(){
    this.serviceObject.registerService(this.user).subscribe(data => {
              alert("You Have Signed Up Successfully");
              this.router.navigate(['login']);
            },
    err =>{
          alert("Something Went Wrong");
    });
  }
  public checkSession(){
    if(sessionStorage.getItem("email") != null){
      this.router.navigate(['']);
    }
  }
}
