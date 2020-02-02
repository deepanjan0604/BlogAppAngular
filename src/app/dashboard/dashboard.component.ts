import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogDataService } from './blogdata.service';
import { HttpClient } from '@angular/common/http';
//"scripts": ["https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js","https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[BlogDataService]
})
export class DashboardComponent implements OnInit {
role:string;
restData= new Array();
  constructor(private router:Router, private _blogData:BlogDataService, private http:HttpClient) { 
    this.role = localStorage.getItem('role');
    if(this.role != null){
      this.router.navigate(['./dashboard']);
      _blogData.getJSON().subscribe((data: {}) => {
        console.log(data);
        for(var i=0;i<data.length;i++)
        this.restData[i]=data[i];
      });
    }
    else{
      this.router.navigate(['./login']);
    }
  }

  addItems=false;
  showItem=true;

  ngOnInit() {
 debugger;
    this.role = localStorage.getItem('role');
    if(this.role != null){
      this.router.navigate(['./dashboard']);


    }
    else{
      this.router.navigate(['./login']);
    }
    this.addItems=false;
    this.showItem=true;
  }

  addItem(data:object){
  
    var len=this.restData.length;
    this.restData[len+1]={};
    this.restData[len+1].id=len+1;
    this.restData[len+1].name=data.data.name;
    this.restData[len+1].description=data.data.description;
    this.restData[len+1].img=data.data.img;
    this.restData[len+1].time="1 minute ago";
    this.restData[len+1].addedBy="Admin";
    this.addItems=false;
    this.showItem=true;

    //this.http.post('../blog copy.json',this.restData[len+1]);

    debugger;
  }
  addItem1(){
    this.addItems=true;
    this.showItem=false;
  }
  showItems(){
    this.showItem=true;
  }

}
