import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogAppAngular';
  role:string;
  constructor() { 
    this.role = localStorage.getItem('role');
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
