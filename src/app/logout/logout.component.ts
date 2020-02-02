import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { 
    this.router.navigate(['./login']);
    this.router.navigate(['./login']);
    localStorage.setItem('role',null);
  }

  ngOnInit() {
    this.router.navigate(['./home']);
    this.router.navigate(['./login']);
    localStorage.setItem('role',null);
  }

}
