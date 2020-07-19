import { Injectable } from '@angular/core';
import {Airport,Aircraft} from './model';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class UtilityService {
   
  loggedIn:boolean = false;
  url:string = 'http://localhost:3520/'
  constructor(private http:HttpClient) { 

  }

  initAirportList():Array<Airport>{
     let AirportList:Array<Airport> = [{_id:'',airport_name:'Bhubaneswar',fuel_capacity:56000,fuel_available:23000},
     {_id:'',airport_name:'Hyderabad',fuel_capacity:76000,fuel_available:36000},
     {_id:'',airport_name:'Kolkata',fuel_capacity:86000,fuel_available:53000},
     {_id:'',airport_name:'Chennai',fuel_capacity:80000,fuel_available:40000},
     {_id:'',airport_name:'Bengaluru',fuel_capacity:106000,fuel_available:5000}]

     AirportList.forEach((airport)=>{
        airport._id = Math.floor(Math.random() * 1000).toString();
     })
     return AirportList
  }

  initAircraftList():Array<Aircraft>{
    let AircraftList:Array<Aircraft> = [{_id:'',aircraft_no:'AI9730',airline:'Air India',source:'Kolkata',destination:'Bengaluru'},
    {_id:'',aircraft_no:'6E292',airline:'Indigo',source:'Chennai',destination:'Kolkata'},
    {_id:'',aircraft_no:'SG1084',airline:'Spice Jet',source:'Bhubaneswar',destination:'Bengaluru'},
    {_id:'',aircraft_no:'UK878',airline:'Vistara',source:'Hyderabad',destination:'Chennai'},
    {_id:'',aircraft_no:'LB633',airline:'Air Costa',source:'Bengaluru',destination:'Hyderabad'}]

    AircraftList.forEach((airport)=>{
      airport._id = Math.floor(Math.random() * 1000).toString();
   });

   return AircraftList.sort((ele1,ele2)=>{
      if(ele1.aircraft_no > ele2.aircraft_no)
       return 1
      else 
       return -1
     });
  }
  
  // Add airport List

   addAirport(airport_details){
      this.http.post(this.url+'Airport',airport_details).subscribe((res)=>{console.log(res)},(err)=>{console.log(err)})
   }

   getAirport():any{
      let _self=this
      return new Promise((resolve,reject)=>{
         this.http.get(this.url+'Airport').subscribe(
            (res:Array<Airport>)=>{
               console.log(res)
               res.sort((ele1,ele2)=>{
            if(ele1.airport_name > ele2.airport_name)
             return 1
            else 
             return -1
           })
           resolve(res)
         },(err:Array<Airport>)=>{
             _self.initAirportList().sort((ele1,ele2)=>{
               if(ele1.airport_name > ele2.airport_name)
                return 1
               else 
                return -1
              });
              resolve( _self.initAirportList())
         })
      })
      
   }



  //Fuel Transaction section
  
   getTransaction():any{
      return new Promise((resolve,reject)=>{
         this.http.get(this.url+'Transaction').subscribe((res)=>{
          resolve(res)
         },(err)=>{
          reject(err)
         })
      })
     
   }

   addTransaction(entryTransaction){
      this.http.post(this.url+'Transaction',entryTransaction).subscribe((res)=>{
         console.log(res);
      },(err)=>{
         console.log(err);
      })
   }

   deleteTransaction(airport_name){
      this.http.post(this.url+'Transaction/RemoveTransaction',{airport_name:airport_name}).subscribe((res)=>{
         console.log(res);
      },(err)=>{
         console.log(err);
      })
   }  
}

