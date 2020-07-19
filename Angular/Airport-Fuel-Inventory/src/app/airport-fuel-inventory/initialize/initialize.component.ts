import { Component, OnInit } from '@angular/core';
import {Airport,Aircraft }  from '../model';
import {UtilityService} from '../utility.service';

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.scss']
})
export class InitializeComponent implements OnInit {

  AirportList:Array<Airport> =[] ;
  AircraftList:Array<Aircraft> =[] ;
  entryAirport:Airport;
  entryAircraft:Aircraft;

  constructor(private utilser : UtilityService) { }

  ngOnInit(): void {
    this.entryAirport = {_id:undefined,airport_name:'',fuel_capacity:0,fuel_available:0};
    this.entryAircraft = {_id:undefined,aircraft_no:'',airline:'',source:'',destination:''};
  }


  getAircrafts(){
    this.AircraftList=this.utilser.initAircraftList().sort((ele1,ele2)=>{
      if(ele1.aircraft_no > ele2.aircraft_no)
       return 1
      else 
       return -1
  });
  }

  getAirports(){
    this.AirportList=this.utilser.getAirport().then((data)=>{
      this.AirportList = data
    })
  }

  clearTransaction(index){
    let airport_name = this.AirportList[index].airport_name
    this.utilser.deleteTransaction(airport_name);
  }

}
