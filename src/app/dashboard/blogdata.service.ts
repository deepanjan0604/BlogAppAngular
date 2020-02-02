import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(public http:HttpClient) { 
    var obj;
    //this.getJSON().subscribe(data => obj=data, error => console.log(error));
  }

  restData:any={ };
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


public getJSON():Observable<any> {
    return this.http.get("http://localhost:3005/blogs").pipe(
      map(this.extractData));

}
public getJSONByID(id:string):Observable<any> {
  return this.http.get("http://localhost:3005/blogs/"+id).pipe(
    map(this.extractData));

}
}
