import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../utility.service';
import {Transaction} from '../model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  AirportSummaryReportList:any=[];
  FuelConsumptionReportList:any=[];
  AllTransactionList:Array<any>=[];

  constructor(private utilser : UtilityService) { }

  ngOnInit(): void {
    this.utilser.getTransaction().then((data)=>{
      this.AllTransactionList = data
      console.log(this.AllTransactionList);
      this.getAirportSummaryReport();
      this.getFuelSummaryReport();
    })
  }

  getAirportSummaryReport(){
     this.AirportSummaryReportList = this.AllTransactionList.map((ele)=>{
        return {Airport:ele.airport_name,Fuel_Available:ele.fuel_available}
     })
     console.log(this.AirportSummaryReportList,'Airport summary')
  }

  getFuelSummaryReport(){
     this.FuelConsumptionReportList = this.AllTransactionList.map((ele)=>{
       return {
        Airport:ele.airport_name,Fuel_Available:ele.fuel_available,Transaction:ele.Transaction
       }
     })
     console.log(this.FuelConsumptionReportList,'Fuel summary')
  }

}
