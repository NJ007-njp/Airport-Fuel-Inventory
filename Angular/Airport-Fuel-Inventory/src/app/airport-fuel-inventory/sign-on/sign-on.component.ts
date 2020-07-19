import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.scss']
})
export class SignOnComponent implements OnInit {


  cred:any={email:"admin@airport.com",password:"Admin@2020"}
  enteredCred={email:'',password:''}
  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  Login(){
     
    if((this.cred.email == this.enteredCred.email && this.cred.password == this.enteredCred.password)){
      sessionStorage.setItem('verified','true')
      this.route.navigate(['home'])
    }
    
  }

}
