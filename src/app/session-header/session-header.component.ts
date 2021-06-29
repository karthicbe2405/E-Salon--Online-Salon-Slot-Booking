import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-header',
  templateUrl: './session-header.component.html',
  styleUrls: ['./session-header.component.css']
})
export class SessionHeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  endSession(){
    sessionStorage.clear();
    location.reload();
  }

  navigateToSalons(){
    this.router.navigate(['salons']);
  }

  navigateToMyBookings(){
    this.router.navigate(['salons/myBookings']);
  }
}
