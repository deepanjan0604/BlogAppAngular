import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchUserDetailsService {

  constructor(public http:HttpClient) { }

  restData={
    "users": [
      {
        "id": 1,
        "first_name": "Admin",
        "last_name": "User",
        "email": "admin",
        "password":"admin",
        "role":"admin"
      },
      {
        "id": 2,
        "first_name": "Deepanjan",
        "last_name": "M",
        "email": "deepanjan.m@blog.com",
        "password":"DeepanjanM",
        "role":"user"
      },
      {
        "id": 3,
        "first_name": "Neeraj",
        "last_name": "K",
        "email": "neeraj.k@blog.com",
        "password":"NeerajK",
        "role":"user"
      }
    ]
  };

  /* restData={"id": "",
  "first_name": "",
  "last_name": "",
  "email": "",
  "password":"",
  "role":""}; */
  /* restData:any;
  public loadDetails(){
    return this.http.get("http://localhost:3000/users").subscribe((data => this.returnDetails(data)));
   }

   returnDetails(data){
     debugger;
    this.restData=data;
    return this.restData;
  }
*/
  getDetails(){
    return this.restData;
    //return this.restData;
  } 
}
