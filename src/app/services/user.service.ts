import { Injectable } from '@angular/core';
import {User} from '../classes/user';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop.model';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //http : HttpClient;

  constructor( private _http : HttpClient) { }

  connectionUrl = "http://localhost:7000/user"
  public loginService(user : User):Observable<any>{
    return this._http.post<any>(this.connectionUrl+"/login",user);
  }
  public registerService(user : User):Observable<any>{
    console.log("Request Send");
    return this._http.post<any>(this.connectionUrl + "/signup",user);
  }

  public getShops():Observable<any>{
    return this._http.get<any>(this.connectionUrl + "/getShops");
  }
  public getShop(sId : {shopId : String}):Observable<any>{
    return this._http.post<any>(this.connectionUrl + "/getShop",sId);
  }
  public getSlots(shop : {shopId : String}):Observable<any>{
    return this._http.post<any>(this.connectionUrl + "/getSlots",shop);
  }

  public bookSlot(bookingDetails : Booking):Observable<any>{
    return this._http.post<any>(this.connectionUrl+"/bookSlot",bookingDetails);
  }

  public fetchBookings(email : any):Observable<any>{
      return this._http.post<any>(this.connectionUrl + "/getBookingByEmail",email);
  }

}
