import { Component, Input, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {

  constructor(private userService : UserService) { }

  shops : Shop[] | undefined;
  name !: string;
  ngOnInit(): void {
    this.loadShops();
  }

  public loadShops(){
      this.userService.getShops().subscribe(data=>{
          console.log(data);
          this.shops = data;
      },err => {
        console.log(err);
      });
  }
}
