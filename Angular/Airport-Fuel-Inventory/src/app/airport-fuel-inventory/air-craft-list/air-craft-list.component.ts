import { Component, OnInit } from '@angular/core';
import {Aircraft} from '../model';
import {UtilityService} from '../utility.service'

@Component({
  selector: 'app-air-craft-list',
  templateUrl: './air-craft-list.component.html',
  styleUrls: ['./air-craft-list.component.scss']
})
export class AirCraftListComponent implements OnInit {

  AircraftList:Array<Aircraft> =[] ;
  entryAircraft:Aircraft;

  constructor(private utilser : UtilityService) { }

  ngOnInit(): void {
    this.entryAircraft = {_id:'',aircraft_no:'',airline:'',source:'',destination:''};
    this.AircraftList = this.utilser.initAircraftList();
  }

  addToAircraftList(){
     this.AircraftList.push(this.entryAircraft);
     console.log(this.AircraftList);
     this.entryAircraft = {_id:'',aircraft_no:'',airline:'',source:'',destination:''};
  }


}
