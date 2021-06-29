import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SessionHeaderComponent } from './session-header/session-header.component';
import { LoginComponent } from './Authentication/login/login.component';
import { BannerComponent } from './banner/banner.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalonsDashboardComponent } from './salons-dashboard/salons-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopsComponent } from './salons-dashboard/shops/shops.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AddShopComponent } from './admin/admin-dash-board/add-shop/add-shop.component';
import { AddServiceComponent } from './admin/admin-dash-board/add-service/add-service.component';
import { AddSlotComponent } from './admin/admin-dash-board/add-slot/add-slot.component';
import { GenerateSlotComponent } from './admin/admin-dash-board/generate-slot/generate-slot.component';
import { BookSlotComponent } from './salons-dashboard/book-slot/book-slot.component';
import { BookingsComponent } from './admin/admin-dash-board/bookings/bookings.component';
import { MyBookingsComponent } from './salons-dashboard/my-bookings/my-bookings.component';
import { TemporaryComponent } from './temporary/temporary.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    SessionHeaderComponent,
    LoginComponent,
    BannerComponent,
    RegisterComponent,
    SalonsDashboardComponent,
    NavbarComponent,
    ShopsComponent,
    AdminLoginComponent,
    AdminDashBoardComponent,
    AdminNavbarComponent,
    AddShopComponent,
    AddServiceComponent,
    AddSlotComponent,
    GenerateSlotComponent,
    BookSlotComponent,
    BookingsComponent,
    MyBookingsComponent,
    TemporaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
