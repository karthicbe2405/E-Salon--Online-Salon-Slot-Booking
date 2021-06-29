import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salons-dashboard',
  templateUrl: './salons-dashboard.component.html',
  styleUrls: ['./salons-dashboard.component.css']
})
export class SalonsDashboardComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(){
      if(sessionStorage.getItem("email") == null){
        this.router.navigate(['']);
      }
  }
}
