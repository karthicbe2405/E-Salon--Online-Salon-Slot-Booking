import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  checkSession(){
    if(sessionStorage.getItem("email") == null){
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['salons']);
    }
  }
}
