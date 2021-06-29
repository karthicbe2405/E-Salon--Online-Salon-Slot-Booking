import { Injectable } from '@angular/core';
import {User} from '../classes/user';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  serverUrl = "http://localhost:7000/admin";

  public adminLogin(adminDetails : any):Observable<any>{
    return this.http.post<any>(this.serverUrl+"/adminLogin",adminDetails);
  }
  public addShop(shopDetails : any):Observable<any>{
    return this.http.post<any>(this.serverUrl + "/addShop",shopDetails);
  }
  public getShops():Observable<any>{
    return this.http.get<any>(this.serverUrl + "/getShops");
  }
  public sendService(serviceDetails : any):Observable<any>{
    return this.http.put(this.serverUrl + "/updateServices",serviceDetails);
  }
  public sendSlot(slotDetails : any):Observable<any>{
    console.log(slotDetails)
    return this.http.put(this.serverUrl + "/addSlot",slotDetails);
  }
  public generateSlot(slotDetails : any):Observable<any>{
    console.log(slotDetails)
    return this.http.post(this.serverUrl + "/generateSlot",slotDetails);
  }
  public fetchBookings():Observable<any>{
    return this.http.get(this.serverUrl + "/getBooking");
  }
}
