import { Component, OnInit, DoCheck } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {

  signon:boolean = false;
  cred:any={email:"admin@airport.com",password:"Admin@2020"}
  enteredCred={email:'',password:''}
  
  constructor(private route : Router){

  }

  ngDoCheck(){
    if(sessionStorage.getItem('verified')=='true'){
      this.signon = true;
    }
    
  }

  Login(){
    if((this.cred.email == this.enteredCred.email && this.cred.password == this.enteredCred.password)){
      sessionStorage.setItem('verified','true')
      this.signon = true;
    }
 }
}

