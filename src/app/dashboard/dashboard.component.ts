import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
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
name:string;
restData= new Array();
form:NgForm;
id:any;
comment:string="";
//comment = {"pageRows":[{"sections":[{"sectionRows":[{"secRowColumns":[]},{"secRowColumns":[{"colName":"users"}]},{"secRowColumns":[{"colName":"sample"}]}],"width":0}]}],"pageName":"DefaultPage","pageLayout":"DEFAULT_LAYOUT","editMode":true}; 

    
comments=new Array();
  constructor(private router:Router, private _blogData:BlogDataService, private http:HttpClient) { 
    this.name=localStorage.getItem('name');
    this.role = localStorage.getItem('role');
    if(this.role != 'null'){
      this.router.navigate(['./dashboard']);
       _blogData.getJSON().subscribe((data: {}) => {
        console.log(data);
        for(var i=0;i<data.length;i++)
        this.restData[i]=data[i];
      }); 
     // this.restData=_blogData.restData;
      debugger;
    }
    else{
      this.router.navigate(['./login']);
    }
  }

  addItems=false;
  showItem=true;
  editItems=false;
  commentsSection=false;
  groupingForm1 = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl('')
  });

  ngOnInit() {
    this.name=localStorage.getItem('name');
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

  addItem(data:any){
  
    var len=this.restData.length;
    this.restData[len]={};
    this.restData[len].id=len+1;
    this.restData[len].name=data.data.name;
    this.restData[len].description=data.data.description;
    this.restData[len].img=data.data.img;//"assets/noodles.jpg";//data.data.img;
    this.restData[len].time="1 minute ago";
    this.restData[len].addedBy="Admin";
    
    this.addItems=false;
    this.showItem=true;
    (<HTMLFormElement>document.getElementById("addForm")).reset();    //this.http.post('../blog copy.json',this.restData[len+1]);

    
  }
  addItem1(){
    this.addItems=true;
    this.showItem=false;
  }
  showItems(){
    this.showItem=true;
  }
  goDashboard(){
    this.addItems=false;
    this.commentsSection=false;
    this.showItem=true;
    (<HTMLFormElement>document.getElementById("addForm")).reset(); 
    this.id="";
  }
  editItem(id:any){
   
    this.groupingForm1.patchValue({
      name: this.restData[id].name ,
      description: this.restData[id].description,
      img: this.restData[id].img
      
    });
    this.editItems=true;
    this.showItem=false;
    this.id=id;
  }
  editValues(){
     
    console.log(this.groupingForm1.value);
    var dataGroupForm=this.groupingForm1.value;
    var id=this.id;
    this.restData[id].name=dataGroupForm.name;
    this.restData[id].description=dataGroupForm.description;
    this.restData[id].img=dataGroupForm.img;
    this.id="";
    this.editItems=false;
    this.showItem=true;
  }

  showComments(id:any){
    debugger;
    this.id=id;
    this.commentsSection=true;
    this.comments=this.restData[id].comments;
  }


  addComment(){
    debugger;
    var i=this.id;
    var len=this.restData[i].comments.length;
    this.restData[i].comments[len]={};
    this.restData[i].comments[len].description=this.comment;
    this.restData[i].comments[len].commentedBy=this.name;
    this.restData[i].comments[len].time="1 sec ago";
    this.comment="";
  }
  /* get comm () {
    return JSON.stringify(this.comment, null, 2);
  }

  set comm (v) {
    try{
    this.comment = JSON.parse(v);}
    catch(e) {
      console.log('error occored while you were typing the JSON');
    };
  
} */


}
