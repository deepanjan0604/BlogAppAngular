import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


import { FetchUserDetailsService } from '../fetch-user-details.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails;
  constructor(private _userDetailsService:FetchUserDetailsService, private router:Router) { 
    debugger;
    this.userDetails=this._userDetailsService.getDetails();
    localStorage.setItem('role',null);
    localStorage.setItem('name', null);

  }


  @Output() messageToEmit= new EventEmitter<any>();
  username='';
  password='';
  role:string;
  displayForm=true;
  display=false;
  ngOnInit() {
    this.displayForm=true;
  this.display=false;
  }
  
 
  validateLogin(value:any){
    debugger;
    var flag=false;
    console.log(value);
    for(var i=0;i<this.userDetails.users.length;i++){
     
    if(value.user.userName == this.userDetails.users[i].email && value.user.password == this.userDetails.users[i].password){
      this.role=this.userDetails.users[i].role;
      this.displayForm=false;
      this.display=true;
      flag= true;
      localStorage.setItem('role', this.userDetails.users[i].role);
      localStorage.setItem('name', this.userDetails.users[i].first_name);
      break;
      

    }
  }
    if(flag== false){
      alert("Wrong User Details");
    }else{
      this.router.navigate(['./home']);
      this.router.navigate(['./dashboard']);
    }
    
  
  }

  sendMessageToParent(){
    this.messageToEmit.emit(this.role);
    //emit(arr);
  }
  getMessage(){this.sendMessageToParent();}


}
