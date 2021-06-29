import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from './admin/admin-dash-board/add-service/add-service.component';
import { AddShopComponent } from './admin/admin-dash-board/add-shop/add-shop.component';
import { AddSlotComponent } from './admin/admin-dash-board/add-slot/add-slot.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
import { BookingsComponent } from './admin/admin-dash-board/bookings/bookings.component';
import { GenerateSlotComponent } from './admin/admin-dash-board/generate-slot/generate-slot.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { BannerComponent } from './banner/banner.component';
import { BookSlotComponent } from './salons-dashboard/book-slot/book-slot.component';
import { MyBookingsComponent } from './salons-dashboard/my-bookings/my-bookings.component';
import { SalonsDashboardComponent } from './salons-dashboard/salons-dashboard.component';
import { ShopsComponent } from './salons-dashboard/shops/shops.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'',component:BannerComponent},
  {path:'salons',component:SalonsDashboardComponent,
 children:[
    {path:'',component:ShopsComponent},
    {path:'bookSlot/:shopId',component:BookSlotComponent},
    {path:'myBookings',component:MyBookingsComponent}
  ]},
  {path:'admin',component:AdminDashBoardComponent,
  children:[
    {path:'addShop',component:AddShopComponent},
    {path:'addSlot',component:AddSlotComponent},
    {path:'addService',component:AddServiceComponent},
    {path:'generateSlot',component:GenerateSlotComponent},
    {path:'bookings',component:BookingsComponent},
    {path:'',component:BookingsComponent},
  ]
  },
  {path:'adminLogin',component:AdminLoginComponent}

  //{path:'**',component:BannerComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
