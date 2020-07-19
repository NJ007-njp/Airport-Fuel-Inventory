import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { InitializeComponent } from './initialize/initialize.component';
import { AirPortListComponent } from './air-port-list/air-port-list.component';
import { AirCraftListComponent } from './air-craft-list/air-craft-list.component';
import { HomeComponent } from './home/home.component';
import { SignOnComponent } from './sign-on/sign-on.component';
import { UtilityService } from './utility.service';
import { TransactionComponent } from './transaction/transaction.component';
import {ReportComponent} from  './report/report.component';

export * from './report/report.component';
export * from './sign-on/sign-on.component';
export * from './initialize/initialize.component';
export * from './home/home.component';
export * from './air-port-list/air-port-list.component';
export * from './air-craft-list/air-craft-list.component';
export * from './utility.service';
export * from './transaction/transaction.component';

@NgModule({
  declarations: [InitializeComponent, 
                 AirPortListComponent, 
                 AirCraftListComponent,
                 HomeComponent,
                 SignOnComponent,
                 TransactionComponent,
                 ReportComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    InitializeComponent,
    AirPortListComponent,
    AirCraftListComponent,
    HomeComponent,
    SignOnComponent,
    TransactionComponent
  ],
  providers:[UtilityService]
})
export class AirportFuelInventoryModule { }

