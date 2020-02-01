import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
role:string;
  constructor(private router:Router) { 
    this.role = localStorage.getItem('role');
    if(this.role != null){
      this.router.navigate(['./dashboard']);


    }
    else{
      this.router.navigate(['./login']);
    }
    debugger;
  }

  addItmes=false;
  showItmes=true;

  ngOnInit() {
 
    this.role = localStorage.getItem('role');
    if(this.role != null){
      this.router.navigate(['./dashboard']);


    }
    else{
      this.router.navigate(['./login']);
    }
    this.addItmes=false;
    this.showItmes=true;
  }

  addItem(){
    this.addItmes=true;
debugger;
  }

}
