import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../utility.service';
import { Aircraft, Airport,Transaction } from '../model';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  AirportList:Array<Airport>=[];
  AircraftList:Array<Aircraft>=[];
  AllTransactionList:Array<any>=[];
  entryTransaction:Transaction;
  lastEntry:Transaction;
  errorFound:boolean = true;
  selectedAirport:any
  transacForAirport:any=[]


  constructor(private utilser : UtilityService) { 
  
  }

  ngOnInit(): void {
    this.AircraftList = this.utilser.initAircraftList();
    this.utilser.getAirport().then((data)=>{
      this.AirportList = data
    })
    this.utilser.getTransaction().then((data)=>{
      this.AllTransactionList = data
      console.log(this.AllTransactionList);
    })
    this.entryTransaction = {_id:'',date_time:undefined,Type:'',transaction_id_parent:undefined,airport_name:'',aircraft:'',fuel:undefined};

    console.log(this.AircraftList)
  }

  makeEntry(){
    if(this.validate(this.entryTransaction)){
      this.errorFound = false
      this.entryTransaction._id = Math.floor(Math.random()*1000000).toString()
      this.entryTransaction.date_time = this.setDate() ; 
      this.utilser.addTransaction(this.entryTransaction)
      this.lastEntry = this.entryTransaction ;
      this.entryTransaction = {_id:'',date_time:undefined,Type:'',transaction_id_parent:undefined,airport_name:'',aircraft:'',fuel:undefined};
    }
    else{
      this.errorFound = true;
    }
  }

  validate(entry:Transaction):boolean{
    if(!entry.airport_name)
     return false
    else if(entry.Type == 'OUT' && !entry.aircraft)
     return false 
    else if(!entry.fuel)
     return false
    else
     return true
  }

  setDate(){
    let date:Date = new Date()
    let month = date.getMonth()+1
    let second
    let min
    if(date.getSeconds()<10)
      second = '0'+date.getSeconds();
    else
      second = date.getSeconds();
    if(date.getMinutes()<10)
      min = '0'+date.getMinutes();
    else
      min = date.getMinutes();  
    let formattedDate = date.getFullYear()+'-'+ month +'-'+date.getDate()+"   "+date.getHours()+':'+min+':'+second;
    return formattedDate
  }

  fetchTransaction(){
     this.transacForAirport = this.AllTransactionList.find((ele)=>{return ele.airport_name == this.selectedAirport})
     console.log(this.transacForAirport)
  }

}
