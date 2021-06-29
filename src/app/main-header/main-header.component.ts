import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  public home : boolean = true;
  public login : boolean = false;
  public signup : boolean = false;

  constructor(private router : Router) {
   }

  ngOnInit(): void {
  }

  public loginActivator(){
      this.login = true;
      this.home = false;
      this.signup = false;
      this.router.navigate(['/login']);
  }

  public homeActivator(){
    this.login = false;
    this.home = true;
    this.signup = false;
}
public signupActivator(){
  this.login = false;
  this.home = false;
  this.signup = true;
}
}
