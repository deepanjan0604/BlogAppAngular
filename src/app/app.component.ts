import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogAppAngular';
  role:string;
  name:string;
  constructor(private router:Router) { 
    this.role = localStorage.getItem('role');
    this.name= localStorage.getItem('name');
    if(this.role != "null"){
      this.router.navigate(['./dashboard']);
    }
    else{
      this.router.navigate(['./login']);
    }
    debugger;
  }
  ngOnInit() {
  }
  recieveFromChild: any;
  getMessage(role:any){
  this.recieveFromChild=role;
  console.log(role);
  }

}
