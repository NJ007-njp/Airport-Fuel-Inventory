import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitializeComponent,AirPortListComponent,AirCraftListComponent,HomeComponent,SignOnComponent,TransactionComponent,ReportComponent } from './airport-fuel-inventory/airport-fuel-inventory.module';





const routes: Routes = [
//{path:'',pathMatch:'full',component:SignOnComponent},
{path:'home',component: HomeComponent},
{path:'AirportList',component:AirPortListComponent},
{path:'AirCraftList',component:AirCraftListComponent},
{path:'initialize',component:InitializeComponent},
{path:'transaction',component:TransactionComponent},
{path:'findreport',component:ReportComponent}]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
