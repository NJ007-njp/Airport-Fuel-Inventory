import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import {AirportFuelInventoryModule, UtilityService} from './airport-fuel-inventory/airport-fuel-inventory.module'
import { AppComponent } from './app.component';
//import { ReportComponent } from './report/report.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AirportFuelInventoryModule,
    FormsModule
  ],
  providers: [UtilityService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
