import { Component, OnInit } from '@angular/core';
import {Airport} from '../model';
import {UtilityService} from '../utility.service';

@Component({
  selector: 'app-air-port-list',
  templateUrl: './air-port-list.component.html',
  styleUrls: ['./air-port-list.component.scss']
})
export class AirPortListComponent implements OnInit {

  AirportList:Array<Airport> =[] ;
  entryAirport:Airport;
 

  constructor(private utilser : UtilityService) { }

  ngOnInit(): void {
    this.entryAirport = {_id:'',airport_name:'',fuel_capacity:0,fuel_available:0};
    this.getAirports().then((data)=>{
      this.AirportList = data
    })
  }

  addToAirportList(){
     this.AirportList.push(this.entryAirport);
     console.log(this.entryAirport);
     this.utilser.addAirport(this.entryAirport);
     this.entryAirport = {_id:'',airport_name:'',fuel_capacity:0,fuel_available:0};
  }

  getAirports(){
    return this.utilser.getAirport()
  }
}
